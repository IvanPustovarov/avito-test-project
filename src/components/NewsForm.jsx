import React, { useState, useEffect } from "react";

const NewsForm = (props) => {
  const [data, setData] = useState([]);
  const story = props.elem;

  const storyURL = `https://hacker-news.firebaseio.com/v0/item/${story}.json?print=pretty`;

  let requestOptions = {
    method: "GET",
    redirect: "follow",
  };
  useEffect(() => {
    async function result() {
      await fetch(storyURL, requestOptions)
        .then((response) => response.json())
        .then((result) => setData(result))
        .catch((error) => console.log("error", error));
    }
    result();
  }, []);

  return (
    <>
      {/* {data.map((elem, index) => (
        <li key={index}>{elem}</li>
      ))} */}
    </>
  );
};
export default NewsForm;
