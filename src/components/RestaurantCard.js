import { IMG_CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
	const { resData } = props;
	const {
		name,
		cuisines,
		avgRating,
		cloudinaryImageId,
		sla: { slaString },
	} = resData.info;
	return (
		<div
			data-testid="resCard"
			className="w-52 h-96 bg-pink-50 m-4 border-8 hover:bg-yellow-100 rounded-md "
		>
			<div className="flex justify-center">
				<img
					className="w-48 h-36 p-2 "
					alt="restaurant image"
					src={IMG_CDN_URL + cloudinaryImageId}
				/>
			</div>
			<div className="p-2">
				<h3>{name}</h3>
				<h4>{cuisines.join(", ")}</h4>
				<h4>{avgRating} Stars of Rating</h4>
				<h5>
					Delevery Time - <span className="time-to-delevery"> {slaString}</span>
				</h5>
			</div>
		</div>
	);
};

// higher order Component
export const topRatedRestaurant = (RestaurantCard) => {
	return (props) => {
		return (
			<div>
				<span className="z-20 absolute bg-black text-orange-200  px-2 py-1 rounded-md">
					Top Rated
				</span>
				<RestaurantCard {...props} />
			</div>
		);
	};
};

export default RestaurantCard;
