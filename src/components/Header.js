import { useContext, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
	const { loggedUser } = useContext(UserContext);
	const [logButton, setLogButton] = useState("LogIn");
	const onlineStatus = useOnlineStatus();
	const logBtnClick = () => {
		logButton === "Login" ? setLogButton("Log Out") : setLogButton("Login");
	};

	// this is to subscribe our store
	const cartItems = useSelector((store) => store.cart.items);
	return (
		<div className="bg-pink-50 h-20 flex justify-between items-center shadow-md mb-3">
			<div className="w-20 h-16 ml-4">
				<img src={LOGO_URL} />
			</div>
			<div>
				<ul className="flex text-2xl gap-4">
					<li className="hover:underline underline-offset-4">
						<Link to="/">Home</Link>
					</li>
					<li className="hover:underline underline-offset-4">
						<Link to="/contact"> Contact Us</Link>
					</li>
					<li className="hover:underline underline-offset-4">
						<Link to="/about">About Us</Link>
					</li>
					<li className="hover:underline underline-offset-4">
						<Link to="/grocery">Grocery</Link>
					</li>
					<li className="hover:underline underline-offset-4 font-bold">
						<Link to="/cart">Cart - ({cartItems.length} Items)</Link>
					</li>
					<button
						className="bg-blue-200 hover:bg-blue-600 hover:text-white rounded px-2 py-1"
						onClick={logBtnClick}
					>
						{logButton}
					</button>
					<li className="bg-slate-300 rounded-md px-2 py-1">
						online status : {onlineStatus ? "🟢" : " 🔴"}
					</li>
					<li className="bg-slate-300 rounded-md px-2 py-1">{loggedUser}</li>
				</ul>
			</div>
		</div>
	);
};

export default Header;
