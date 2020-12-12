import React from "react";
import News from "./News";
import RefreshNewsButton from "./RefreshNewsButton";

const MainPage = (props) => {
  const data = props.data;

  return (
    <div>
      <RefreshNewsButton />
      {data.map((elem, index) => (
        <News elem={elem} key={index} />
      ))}
    </div>
  );
};

export default MainPage;
