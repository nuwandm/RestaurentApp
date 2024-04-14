// accordian have header and body

import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({ data, showItems, setShowIndex }) => {
	const [iconClicked, setIconClicked] = useState(false);
	const handleClick = () => {
		setIconClicked(!iconClicked);
		setShowIndex(showItems);
	};

	return (
		<div>
			{/*  accordion header */}
			<div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4 ">
				<div className="flex justify-between mb-2 ">
					<span className="font-bold text-lg">
						{data?.title} ({data.itemCards.length})
					</span>
					<span
						className="cursor-pointer hover:text-xl shadow-lg "
						onClick={handleClick}
					>
						{iconClicked ? "⬆️" : "⬇️"}
					</span>
				</div>
				{/* accordion body */}
				{showItems && <ItemList items={data.itemCards} />}
			</div>
		</div>
	);
};

export default RestaurantCategory;
