import { fireEvent, render, screen } from "@testing-library/react";
import Body from "../Body";
import MOCK_DATA from "../mocks/mockRestaurantListData.json";
import { act } from "react-dom/test-utils";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom"; // to use toBeInTheDocument() we should import this

global.fetch = jest.fn(() => {
	return Promise.resolve({
		json: () => {
			return Promise.resolve(MOCK_DATA);
		},
	});
});

it("Should Search restList for text Inputs ", async () => {
	// when ever we us state update we wrap the render method in "act" function

	await act(async () =>
		render(
			<BrowserRouter>
				<Body />
			</BrowserRouter>
		)
	);

	const cardsBeforeSearch = screen.getAllByTestId("resCard");
	expect(cardsBeforeSearch.length).toBe(9);

	const searchBtn = screen.getByRole("button", {
		name: "Search",
	});
	const searchInput = screen.getByTestId("searchInput");

	fireEvent.change(searchInput, { target: { value: "Monginis" } });
	fireEvent.click(searchBtn);

	//screen should have 3 cards
	const cardsAfterSearch = screen.getAllByTestId("resCard");
	expect(cardsAfterSearch.length).toBe(1);
});

it("Should filterout  Top rated restaurants by clicking this button ", async () => {
	// when ever we us state update we wrap the render method in "act" function

	await act(async () =>
		render(
			<BrowserRouter>
				<Body />
			</BrowserRouter>
		)
	);

	const cardsBeforeSearch = screen.getAllByTestId("resCard");
	expect(cardsBeforeSearch.length).toBe(9);

	const topRatedBTN = screen.getByRole("button", {
		name: "top rated restaurants",
	});
	fireEvent.click(topRatedBTN);

	//screen should have 3 cards
	const cardsAfterFilter = screen.getAllByTestId("resCard");
	expect(cardsAfterFilter.length).toBe(4);
});
