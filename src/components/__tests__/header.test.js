import { fireEvent, render, screen } from "@testing-library/react";
import Header from "../Header";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

it("should render Header with a login button", () => {
	render(
		<BrowserRouter>
			<Provider store={appStore}>
				<Header />
			</Provider>
		</BrowserRouter>
	);

	// there are multiple buttons and I need to check a special button named as login
	const loginButton = screen.getByRole("button", { name: "Login" });
	expect(loginButton).toBeInTheDocument();
});

it("should render Header with cart items 0", () => {
	render(
		<BrowserRouter>
			<Provider store={appStore}>
				<Header />
			</Provider>
		</BrowserRouter>
	);

	const cartItems = screen.getByText("Cart - (0 Items)");
	expect(cartItems).toBeInTheDocument();
});

//use regex
it("should render Header with cart ", () => {
	render(
		<BrowserRouter>
			<Provider store={appStore}>
				<Header />
			</Provider>
		</BrowserRouter>
	);

	const cart = screen.getByText(/Cart/);
	expect(cart).toBeInTheDocument();
});

// check login button functionalities with firing an event
it("should change login button on click", () => {
	render(
		<BrowserRouter>
			<Provider store={appStore}>
				<Header />
			</Provider>
		</BrowserRouter>
	);

	const loginButton = screen.getByText("Login");
	fireEvent.click(loginButton);

	const logOutButton = screen.getByText("Logout");
	expect(logOutButton).toBeInTheDocument();
});
