import React from "react";
import "./NewsPage.css";
import Header from "../../Component/Header/Header";
import { useParams } from "react-router-dom";
import { useEffect,useState } from "react";
import { BlocksRenderer } from '@strapi/blocks-react-renderer';

// Content should come from your Strapi API

const NewsPage = () => {
	const { id : newsId } = useParams();
	console.log(newsId)
	
	const [newsData, setNewsData] = useState(null);
	const [newsImage,setnewsImage] = useState(null);
	const [newsDate,setNewsDate] = useState(null);
	const [paragraph] = useState(null)
	console.log("link foto = "+newsImage);
	function formatDate(dateString) {
		const options = { day: "numeric", month: "long", year: "numeric" };
    	return new Date(dateString).toLocaleDateString("id-ID", options);
	}

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await fetch(
					`http://localhost:1337/api/newsrooms/${newsId}?populate=*`
				);
				const data = await response.json();
				const tanggalfix = formatDate(data.data.attributes.publishedAt);

				setNewsDate(tanggalfix)
				setNewsData(data.data.attributes);
				setnewsImage(data.data.attributes.thumbnail.data.attributes.formats.large.url);
				const paragraphs = data.data.attributes.bodycopy
				console.log("paragraf = "+paragraphs)

				console.log(data.data.attributes.thumbnail.data.attributes.formats.large.url); // Assuming your API endpoint is an array with one item
			} catch (error) {
				console.error("Error fetching data:", error);
			}
		};
		
		fetchData();
	}, []);

	// const paragraphs = data.data[0].attributes.bodycopy.split('\n');
	const renderParagraphs = (text) => {
		console.log(text)
		// return text.split('\n').map((paragraph, index) => (
		//   <p key={index}>{paragraph}</p>
		// ));
	  };


	
	return (
		<div>
			<Header />
			<div className="news-header">
				<div className="category-component">
					<div className="component-content">
						<p className="category">Update</p>
						<p className="date">{newsDate}</p>
					</div>
				</div>

				<div className="component-content">
					<h1 className="news-headline">
						{newsData&&newsData.Headline}
				
					</h1>
				</div>
				<div className="component-content-img">
					<img className="picture-image" src={`http://localhost:1337${newsImage&&newsImage}`}/>
				</div>

				<div className="component-bodycopy">
				{newsData && newsData.bodycopy.map((paragraph, index) => (
            <p className="bodycopy" key={index}>{paragraph.children[0].text}</p>
          ))}
					{/* <div className="bodycopy">
					{newsData&&newsData.bodycopy}
					</div> */}
{/* 
					{renderParagraphs(newsData&&newsData.bodycopy)} */}
					{/* <p className="bodycopy">
					
					</p> */}

					{/* <p className="bodycopy">
						Apple Arcade is set for another incredible year of uninterrupted
						play, starting with three new titles and more than 20 major updates
						to popular games launching this month. Today players can embark on
						an epic, wholesome, and nostalgic journey in Tamagotchi Adventure
						Kingdom; get swept up in Cornsweeper, a relaxing and whimsical
						reimagining of the beloved logic puzzle game Minesweeper; and go all
						in on Blackjack by MobilityWare+.
					</p> */}
				</div>
			</div>
		</div>
	);
};

export default NewsPage;
