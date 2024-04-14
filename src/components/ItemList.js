import React from "react";
import { IMG_CDN_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addItems } from "../utils/cartSlice";

const ItemList = ({ items }) => {
	const dispatch = useDispatch();

	// this handleAddItems function is used to dispatch an action to redux store
	const handleAddItems = (item) => {
		dispatch(addItems(item));
	};
	return (
		<div>
			{items.map((item) => {
				const { name, price, defaultPrice, id } = item?.card?.info;
				return (
					<div
						key={id}
						className="p-2 m-2 border-gray-400 border-b-2 text-left flex justify-between"
					>
						<div className="w-9/12">
							<div className="py-2">
								<span className="font-semibold">{name}</span>
								<span> - Rs.{(price ? price : defaultPrice) / 100}</span>
							</div>
							<p className="text-xs ">{item?.card?.info?.description}</p>
						</div>
						<div className="w-3/12 p-4">
							<div className="absolute">
								<button
									className="p-2 mx-12 rounded-lg  bg-black text-white shadow-lg text-xs"
									onClick={() => handleAddItems(item)}
								>
									Add +
								</button>
							</div>
							{/* <img src={IMG_CDN_URL + imageId} /> */}
						</div>
					</div>
				);
			})}
		</div>
	);
};

export default ItemList;
