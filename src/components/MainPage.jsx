import React from "react";
import NewsForm from "./NewsForm";

const MainPage = (props) => {
  const data = props.data;
  if (data.length > 100) {
    data.length = 100;
  }
  //const story = `https://hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty`;
  return (
    <div>
      <button>click</button>
      <NewsForm />
    </div>
  );
};

export default MainPage;
