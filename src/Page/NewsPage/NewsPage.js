import React from "react";
import "./NewsPage.css";
import Header from "../../Component/Header/Header";
import { useParams } from "react-router-dom";

const NewsPage = () => {
	const { id } = useParams();
	console.log(id);

	return (
		<div>
			<Header />
			<div className="news-header">
				<div className="category-component">
					<div className="component-content">
						<p className="category">Update</p>
						<p className="date">10 October 2023</p>
					</div>
				</div>

				<div className="component-content">
					<h1 className="news-headline">
						Kura kura ketabrak fortuner tapi malah ditinggal nikah
					</h1>
				</div>
				<div className="component-content-img">
					<img className="picture-image" src="./img/dummy_article.JPG" />
				</div>

				<div className="component-bodycopy">
					<p className="bodycopy">
						Apple Arcade is set for another incredible year of uninterrupted
						play, starting with three new titles and more than 20 major updates
						to popular games launching this month. Today players can embark on
						an epic, wholesome, and nostalgic journey in Tamagotchi Adventure
						Kingdom; get swept up in Cornsweeper, a relaxing and whimsical
						reimagining of the beloved logic puzzle game Minesweeper; and go all
						in on Blackjack by MobilityWare+.
					</p>

					<p className="bodycopy">
						Apple Arcade is set for another incredible year of uninterrupted
						play, starting with three new titles and more than 20 major updates
						to popular games launching this month. Today players can embark on
						an epic, wholesome, and nostalgic journey in Tamagotchi Adventure
						Kingdom; get swept up in Cornsweeper, a relaxing and whimsical
						reimagining of the beloved logic puzzle game Minesweeper; and go all
						in on Blackjack by MobilityWare+.
					</p>
				</div>
			</div>
		</div>
	);
};

export default NewsPage;
