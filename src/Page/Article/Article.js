import React from "react";
import Header from "../../Component/Header/Header";
import "./Article.css";
import ArticleTile from "../../Component/ArticleTile/ArticleTile";
import { useState, useEffect } from "react";
import { getNews } from "../NewsPage/action";

const Article = () => {
  useEffect(() => {
    document.title = "Newsroom"; // Change the window title here
  }, []);
  const [news, setNews] = useState([]);
  function formatDate(dateString) {
    const options = { day: "numeric", month: "long", year: "numeric" };
    return new Date(dateString).toLocaleDateString("id-ID", options);
  }
  const [Heading, setHeading] = useState(null);
  const fetchdata = async () => {
    try {
      const data = await getNews();

      setNews(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchdata();
    console.log(news);
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
          {news &&
            news.map((newsItem) => (
              <ArticleTile
                key={newsItem.id}
                headline={newsItem.title}
                date={formatDate(newsItem.createAt)}
                photo={newsItem.img_url}
                id={newsItem.news_id}
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Article;
