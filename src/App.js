import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Welcome from "./Page/Welcome/Welcome";
import KabinetHMTT from "./Page/KabinetHMTT/KabinetHMTT";
import Laboratory from "./Page/Laboratory/Laboratory";
import Article from "./Page/Article/Article";
import NewsPage from "./Page/NewsPage/NewsPage";

function App() {
	return (
		<div>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Welcome />}></Route>
					<Route path="/kabinethmtt" element={<KabinetHMTT />}></Route>
					<Route path="/laboratory" element={<Laboratory />}></Route>
					<Route path="/article" element={<Article />}></Route>
					<Route path="/news" element={<NewsPage />}></Route>
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
