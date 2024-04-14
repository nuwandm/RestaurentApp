import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import About from "./components/About";
import ContactUs from "./components/ContactUs";
import Error from "./components/Error";
import Body from "./components/Body";
import RestaurantMenu from "./components/RestaurantMenu";
import Cart from "./components/Cart";
// import Grocery from "./components/Grocery";
const root = ReactDOM.createRoot(document.getElementById("root"));

// const Grocery = lazy(() => {
// 	import("./components/Grocery");
// });

const Grocery = lazy(() => import("./components/Grocery"));

const appRouter = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		// children array
		children: [
			{ path: "/", element: <Body /> },
			{ path: "/about", element: <About /> },
			{ path: "/contact", element: <ContactUs /> },
			{ path: "/cart", element: <Cart /> },
			{
				path: "/grocery",
				element: (
					<Suspense fallback={<h1>Loading...</h1>}>
						<Grocery />
					</Suspense>
				),
			},
			{ path: "/restaurant/:resId", element: <RestaurantMenu /> },
		],
		errorElement: <Error />,
	},
]);

root.render(<RouterProvider router={appRouter} />);

reportWebVitals();
