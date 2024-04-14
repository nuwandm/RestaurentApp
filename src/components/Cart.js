import React from "react";
import { useSelector } from "react-redux";
import ItemList from "./ItemList";
import { useDispatch } from "react-redux";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
	const dispatch = useDispatch();
	const cartItems = useSelector((store) => store.cart.items);

	const handleClearCart = () => {
		dispatch(clearCart());
	};

	return (
		<div className="text-center m-4 p-4">
			<h1 className="font-bold m-1 text-2xl ">Cart</h1>
			{cartItems.length > 0 && (
				<span
					className="cursor-pointer bg-slate-500 text-white p-1 m-1 rounded-md"
					onClick={handleClearCart}
				>
					Clear Cart
				</span>
			)}
			<div className="w-6/12 m-auto ">
				<ItemList items={cartItems} />
				{cartItems.length === 0 && (
					<h2>No items to show in the cart right now</h2>
				)}
			</div>
		</div>
	);
};

export default Cart;
