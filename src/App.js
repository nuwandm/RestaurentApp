import "./App.css";
import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import { Outlet } from "react-router-dom";
import UserContext from "./utils/UserContext";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";

function App() {
	const [userName, setUserName] = useState();
	useEffect(() => {
		const data = {
			name: "nuwan D",
		};
		setUserName(data.name);
	}, []);

	return (
		<Provider store={appStore}>
			<UserContext.Provider
				value={{
					loggedUser: userName,
					setUserName: setUserName,
				}}
			>
				<div className="App">
					<Header />
					{/* this is the way to render router children to the dom  */}
					<Outlet />
				</div>
			</UserContext.Provider>
		</Provider>
	);
}

export default App;
