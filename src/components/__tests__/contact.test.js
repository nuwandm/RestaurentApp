import { render, screen } from "@testing-library/react";
import ContactUs from "../ContactUs";
import "@testing-library/jest-dom";

test("Should load contact page", () => {
	render(<ContactUs />);
	const heading = screen.getByRole("heading");
	expect(heading).toBeInTheDocument();
});

test("Should load button in the page", () => {
	render(<ContactUs />);
	const button = screen.getByRole("button");
	expect(button).toBeInTheDocument();
});

test("Should be word name as a place holder in the page", () => {
	render(<ContactUs />);
	const nameAsaPlaceHolder = screen.getByPlaceholderText("name");
	expect(nameAsaPlaceHolder).toBeInTheDocument();
});

// we can replace test with the word --- it("....",()=>{}) ---  (No difference it just an alias )

it("Should load 2 inputs on the contact component", () => {
	render(<ContactUs />);
	const inputBoxes = screen.getAllByRole("textbox");
	expect(inputBoxes.length).not.toBe(3);
});

