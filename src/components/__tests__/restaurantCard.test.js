import { render, screen } from "@testing-library/react";
import RestaurantCard from "../RestaurantCard";
import resData from "../mocks/resCardMock.json";
import { topRatedRestaurant } from "../RestaurantCard";
import "@testing-library/jest-dom"; // to use toBeInTheDocument() we should import this 

it("should render Restaurant card with the props", () => {
	// pass mock data to the component for testing
	render(<RestaurantCard resData={resData} />);

	const name = screen.getByText("Sweets, Chinese, Burgers, Fast Food");
	expect(name).toBeInTheDocument();
});

// testing a higher order component
it("should render RestaurantCard component with the topRatedRestaurant label", () => {
	const TopRatedRestaurant = topRatedRestaurant(RestaurantCard);
	render(<TopRatedRestaurant resData={resData} />);

	const topRateBadge = screen.getByText("Top Rated");
	expect(topRateBadge).toBeInTheDocument();
});
