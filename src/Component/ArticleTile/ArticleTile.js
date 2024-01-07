import React from "react";
import "./ArticleTile.css";

function ArticleTile(props) {
	return (
		<div className="Parent">
			<div className="Card">
				<div className="PhotoHolder">
					{/* <img src={props.photo} /> */}
					<img src="./img/dummy_article.JPG" />
				</div>

				<div className="Desc">
					<p className="Category">Update</p>
					<a className="text-button" href="/news">
						<h1 className="Headline">
							Kura kura ketabrak fortuner tapi malah ditinggal nikah
						</h1>
					</a>

					<p className="Date">10 October 2023</p>
				</div>
			</div>
		</div>
	);
}

export default ArticleTile;
