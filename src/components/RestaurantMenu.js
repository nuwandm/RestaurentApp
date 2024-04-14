import React, { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
	const { resId } = useParams();
	const resInfo = useRestaurantMenu(resId);
	const [showIndex, setShowIndex] = useState(null);

	// if only resInfo gets filled some data it goes for further steps
	if (resInfo === null) return <Shimmer />;

	const { name, cuisines, costForTwoMessage } =
		resInfo?.cards[2]?.card?.card.info;

	const categories =
		resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
			(c) =>
				c.card?.card?.["@type"] ===
				"type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
		);

	return (
		<div className="text-center">
			<h2 className=" font-bold my-6 text-2xl">{name}</h2>
			<p className=" font-bold text-lg">
				{cuisines.join(", ")} - {costForTwoMessage}
			</p>

			{categories.map((category, index) => {
				return (
					<span key={index}>
						{
							<RestaurantCategory
								data={category?.card?.card}
								showItems={index === showIndex ? true : false}
								setShowIndex={(showItems) => {
									setShowIndex(showItems ? null : index);
								}}
							/>
						}
					</span>
				);
			})}
		</div>
	);
};

export default RestaurantMenu;
