import RestaurantCard, { topRatedRestaurant } from "./RestaurantCard";
import { useContext, useEffect, useState } from "react";
import { DATA_API } from "../utils/constants";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Body = () => {
	const [listOfRestaurants, setListOfRestaurants] = useState([]);
	const [filteredRestaurants, setFilteredRestaurants] = useState([]);
	const [searchText, setSearchText] = useState([]);
	const online = useOnlineStatus();
	const { loggedUser, setUserName } = useContext(UserContext);

	useEffect(() => {
		fetchData();
	}, []);

	const fetchData = async () => {
		const data = await fetch(DATA_API);
		const json = await data.json();
		setListOfRestaurants(
			json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
		);
		setFilteredRestaurants(
			json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
		);
	};

	const filterCard = () => {
		const filteredRestaurants = listOfRestaurants.filter((restaurant) => {
			return restaurant.info.avgRating > 4;
		});
		setListOfRestaurants(filteredRestaurants);
	};

	const searchBtnClick = () => {
		const searchedResults = listOfRestaurants.filter((res) => {
			return res.info.name.toLowerCase().includes(searchText.toLowerCase());
		});
		setFilteredRestaurants(searchedResults);
	};

	// this related with higher order component take a component as an argument and returns a component with some modifications
	const RestaurantTopRated = topRatedRestaurant(RestaurantCard);

	if (!online)
		return <h1>You are not online please check your internet connection</h1>;

	return listOfRestaurants.length === 0 ? (
		<Shimmer />
	) : (
		<div>
			<div className="bg-pink-50 mb-2 p-2 flex justify-between">
				<div className="bg-pink-50 mb-2 p-2 flex ">
					<button className="mr-2" onClick={filterCard}>
						Search Restaurants :
					</button>
					<input
						data-testid="searchInput"
						value={searchText}
						onChange={(e) => {
							setSearchText(e.target.value);
						}}
						className="rounded-lg bg-zinc-300 mr-2"
					></input>
					<button
						onClick={() => {
							searchBtnClick();
						}}
						className="rounded-lg bg-blue-300 p-1 "
					>
						Search
					</button>
				</div>
				<button
					className="rounded-lg bg-yellow-200 px-2 "
					onClick={() => {
						const filteredList = listOfRestaurants.filter(
							(res) => res.info.avgRating > 4.2
						);
						setFilteredRestaurants(filteredList);
					}}
				>
					top rated restaurants
				</button>
				<button
					className="rounded-lg bg-yellow-200 px-2 "
					onClick={() => {
						setFilteredRestaurants(listOfRestaurants);
					}}
				>
					clear
				</button>
				<div className="">
					User Name :{" "}
					<input
						className="p-2 m-2 border-b-2 rounded-lg"
						value={loggedUser}
						onChange={(e) => setUserName(e.target.value)}
					/>
				</div>
			</div>

			<div className="flex flex-wrap justify-center">
				{filteredRestaurants.map((restaurant) => (
					<Link
						key={restaurant?.info?.id}
						to={"/restaurant/" + restaurant?.info?.id}
					>
						{restaurant?.info?.avgRating > 4.2 ? (
							<RestaurantTopRated resData={restaurant} />
						) : (
							<RestaurantCard resData={restaurant} />
						)}
					</Link>
				))}
			</div>
		</div>
	);
};

export default Body;
