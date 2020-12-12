import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import backToNews from "../store/actions/backToNews";

import NewsPage from "./NewsPage";

const News = (props) => {
  // const sawBack = useSelector((state) => state.backToNews);
  const dispatch = useDispatch();

  const [isRenderNews, setIsRenderNews] = useState(false);
  const [story, setStory] = useState([]);

  const stories = props.elem;

  let requestOptions = {
    method: "GET",
    redirect: "follow",
  };
  useEffect(() => {
    async function result() {
      setIsRenderNews(false);
      const storyURL = `https://hacker-news.firebaseio.com/v0/item/${stories}.json?print=pretty`;

      const response = await fetch(storyURL, requestOptions);

      const requestStory = await fetch(response.url, requestOptions);

      async function fetchRequestStory() {
        const storyResult = await requestStory.json();
        setStory(storyResult);
        setIsRenderNews(true);
      }
      fetchRequestStory();
    }
    result();
  }, [stories]);

  const timeConversion = (unix_timestamp) => {
    let a = new Date(unix_timestamp * 1000);
    let months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];

    let year = a.getFullYear();
    let month = months[a.getMonth()];
    let date = a.getDate();
    let hour = a.getHours();
    let time =
      date + " " + month + " " + year + " " + "hours ago:" + " " + hour;
    return time;
  };

  return (
    <div>
      <NavLink to={`/newspage/` + story.id}>
        <h1>{story.title}</h1>
      </NavLink>
      <span onClick={() => dispatch(backToNews())}>points: {story.score}</span>
      <br />
      <span>author: {story.by}</span>
      <br />
      <span>date: {timeConversion(story.time)}</span>
      <br />
    </div>
  );
};
export default News;
