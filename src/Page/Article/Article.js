import React from "react";
import Header from "../../Component/Header/Header";
import "./Article.css";
import ArticleTile from "../../Component/ArticleTile/ArticleTile";

const Article = () => {
	return (
		<div>
			<Header />

			<h2 className="article-header">Lastest News</h2>

			<div className="highlight-parent">
				<img
					className="placeholder"
					alt="foto orang"
					src="./img/dummy_article.JPG"
				/>

				<div className="text-info-headline">
					<div class="category">Update</div>
					<div class="headline">
						Kura Kura ditabrak mobil tapi malah ditinggal nikah : Lo yang mulai
						kenapa lo yang galak?
					</div>
					<div class="text-headline">
						Apple News+ subscribers now have access to the best premium daily
						sports journalism for fans
					</div>
				</div>
			</div>
			<div className="container">
				<div className="article-tile-container">
					<ArticleTile />
					<ArticleTile />
					<ArticleTile />
					<ArticleTile />
					<ArticleTile />
					<ArticleTile />
				</div>
			</div>
		</div>
	);
};

export default Article;
