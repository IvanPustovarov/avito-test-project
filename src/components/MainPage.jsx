import React from "react";
import News from "./News";

const MainPage = (props) => {
  const data = props.data;

  return (
    <div>
      <button>refresh</button>
      {data.map((elem, index) => (
        <News elem={elem} key={index} />
      ))}
    </div>
  );
};

export default MainPage;
