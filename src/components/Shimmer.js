import React from "react";

const Card = () => {
	return (
		<div>
			<div className="card-container">
				<div className="card-details"></div>
			</div>
		</div>
	);
};

const Shimmer = () => {
	return (
		<div style={{ display: "flex", flexWrap: "wrap" }}>
			<Card />
			<Card />
			<Card />
			<Card />
			<Card />
			<Card />
			<Card />
			<Card />
			<Card />
			<Card />
			<Card />
			<Card />
		</div>
	);
};

export default Shimmer;
