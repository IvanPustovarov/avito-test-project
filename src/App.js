import "./App.css";
import React, { useState, useEffect } from "react";

//components
import MainPage from "./components/MainPage";

const NEW_STORIES =
  "https://hacker-news.firebaseio.com/v0/newstories.json?print=pretty";

const App = () => {
  const [data, setData] = useState([]);

  let requestOptions = {
    method: "GET",
    redirect: "follow",
  };

  useEffect(() => {
    async function result() {
      await fetch(NEW_STORIES, requestOptions)
        .then((response) => response.json())
        .then((result) => setData(result))
        .catch((error) => console.log("error", error));
    }
    result();
  }, []);

  if (data.length > 100) {
    data.length = 100;
  }

  return (
    <div>
      <MainPage data={data} />
    </div>
  );
};

export default App;
