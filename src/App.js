import "./App.css";
import React, { useState, useEffect } from "react";

//components
import MainPage from "./components/MainPage";
import NewsPage from "./components/NewsPage";

const NEW_STORIES =
  "https://hacker-news.firebaseio.com/v0/newstories.json?print=pretty";

const App = () => {
  const [data, setData] = useState([]);

  const getStories = (data) => {
    let requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(NEW_STORIES, requestOptions)
      .then((response) => response.json())
      .then((result) => setData(result))
      .catch((error) => console.log("error", error));
  };

  return (
    <div className="App">
      {getStories()}
      <MainPage data={data} />
      <NewsPage />
    </div>
  );
};

export default App;
