import React from "react";
import Header from "../../Component/Header/Header";
import "./Article.css";
import ArticleTile from "../../Component/ArticleTile/ArticleTile";
import { useState, useEffect } from "react";

const Article = () => {
	useEffect(() => {
		document.title = "Newsroom"; // Change the window title here
	}, []);
	const [newsData, setNewsData] = useState(null);
	function formatDate(dateString) {
		const options = { day: "numeric", month: "long", year: "numeric" };
    	return new Date(dateString).toLocaleDateString("id-ID", options);
	}

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await fetch(
					"http://localhost:1337/api/newsrooms?populate=*"
				);
				const data = await response.json();
				const formattedData = data.data.map((item) => ({
					...item,
					attributes: {
						...item.attributes,
						publishedAt: formatDate(item.attributes.publishedAt),
					},
				}));
				setNewsData(formattedData);
				console.log(formattedData); // Assuming your API endpoint is an array with one item
			} catch (error) {
				console.error("Error fetching data:", error);
			}
		};

		fetchData();
	}, []);
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
					{newsData &&
						newsData.map((newsItem) => (
							<ArticleTile
								key={newsItem.id}
								headline={newsItem.attributes.Headline}
								date={newsItem.attributes.publishedAt}
								photo={
									"http://localhost:1337" +
									newsItem.attributes.thumbnail.data.attributes.formats.large.url
								}
								id={newsItem.id}
							/>
						))}
				</div>
			</div>
		</div>
	);
};

export default Article;
