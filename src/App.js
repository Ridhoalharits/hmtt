import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Welcome from "./Page/Welcome/Welcome";
import KabinetHMTT from "./Page/KabinetHMTT/KabinetHMTT";

function App() {
	return (
		<div>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Welcome />}></Route>
					<Route path="/kabinethmtt" element={<KabinetHMTT />}></Route>
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
