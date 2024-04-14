import { useEffect } from "react";

const getUser = async () => {
	const data = await fetch("https://api.github.com/users/nuwandm");
	const json = await data.json();
	console.log(json);
};

const User = ({ name, location }) => {
	useEffect(() => {
		getUser();
	});

	return (
		<div className="user-card">
			<h2>Name : {name}</h2>
			<h3>Location : {location}</h3>
		</div>
	);
};

export default User;
 