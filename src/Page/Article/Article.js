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
  const [Heading, setHeading] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "http://localhost:1337/api/newsrooms?populate=*"
        );
        const data = await response.json();
        // const formattedData = data.data.map((item) => ({
        // 	...item,
        // 	attributes: {
        // 		...item.attributes,
        // 		publishedAt: formatDate(item.attributes.publishedAt),
        // 	},
        // }));
        const sortedNews = data.data.sort(
          (b, a) =>
            new Date(a.attributes.publishedAt) -
            new Date(b.attributes.publishedAt)
        );
        const formattedData = sortedNews.map((item) => ({
          ...item,
          attributes: {
            ...item.attributes,
            publishedAt: formatDate(item.attributes.publishedAt),
          },
        }));
        console.log(sortedNews);
        setNewsData(formattedData);
        // console.log(formattedData); // Assuming your API endpoint is an array with one item
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const fetchDataHeadline = async () => {
      try {
        const response = await fetch(
          "http://localhost:1337/api/headline/?populate=*"
        );
        const dataHead = await response.json();
        setHeading(dataHead.data.attributes);
        console.log(dataHead.data.attributes); // Assuming your API endpoint is an array with one item
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchDataHeadline();
  }, []);

  return (
    <div>
      <Header />

      <h2 className="article-header">Lastest News today</h2>

      <div className="highlight-parent">
        <img
          className="placeholder"
          alt="foto orang"
          src="./img/dummy_article.JPG"
        />

        <div className="text-info-headline">
          <div class="category">Update Now</div>
          <div class="headline">{Heading && Heading.heading}</div>
          <div class="text-headline">{Heading && Heading.desc}</div>
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
                  newsItem.attributes.thumbnail.data.attributes.formats.large
                    .url
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
