import React from "react";
import NewsForm from "./NewsForm";

const MainPage = (props) => {
  const data = props.data;

  return (
    <div>
      <button>click</button>
      {data.map((elem, index) => (
        <NewsForm elem={elem} key={index} />
      ))}
    </div>
  );
};

export default MainPage;
