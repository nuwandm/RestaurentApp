import React from "react";
import UserClass from "./UserClass";

class About extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			userInfo: {
				name: "Dummy Name",
				location: "Dummy Location",
			},
		};
	}

	// 📞 we use componentDidMount method for making api calls
	async componentDidMount() {
		const data = await fetch("https://api.github.com/users/nuwandm");
		const json = await data.json();

		this.setState({
			userInfo: json,
		});
	}

	render() {
		const { name, login, avatar_url } = this.state.userInfo;
		return (
			<div>
				<h1>This is about Class Component</h1>
				<UserClass name={name} location={login} />
				<img src={avatar_url}></img>
			</div>
		);
	}
}

export default About;
