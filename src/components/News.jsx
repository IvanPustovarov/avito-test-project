import React, { useState, useEffect } from "react";

const News = (props) => {
  const [isRenderNews, setIsRenderNews] = useState(false);
  const [story, setStory] = useState([]);

  const stories = props.elem;

  let requestOptions = {
    method: "GET",
    redirect: "follow",
  };
  useEffect(() => {
    async function result() {
      const storyURL = `https://hacker-news.firebaseio.com/v0/item/${stories}.json?print=pretty`;

      const response = await fetch(storyURL, requestOptions);

      const requestStory = await fetch(response.url, requestOptions);
      async function fetchRequestStory() {
        const storyResult = await requestStory.json();
        setStory(storyResult);
      }
      fetchRequestStory();
    }
    result();
  }, [stories]);

  const currentNews = () => {
    if (isRenderNews) {
    }
  };

  return (
    <div>
      <h1>title: {story.title}</h1>
      <span>points: {story.score}</span>
      <br />
      <span>author: {story.by}</span>
      <br />
      <span>date: {story.time}</span>
      <br />
    </div>
  );
};
export default News;
