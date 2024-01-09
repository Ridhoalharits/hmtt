import React from "react";
import "./ArticleTile.css";
import { Link } from "react-router-dom";

function ArticleTile(props) {
	return (
		<div className="Parent">
			<div className="Card">
				<div className="PhotoHolder">
					<img src={props.photo} />
					{/* <img src="./img/dummy_article.JPG" /> */}
				</div>

				<div className="Desc">
					<p className="Category">Update</p>
					<a className="text-button">
						<h1 className="Headline">{props.headline}</h1>
					</a>

					<p className="Date">{props.date}</p>
				</div>
			</div>
		</div>
	);
}

export default ArticleTile;
