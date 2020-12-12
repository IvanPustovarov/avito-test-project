import React from "react";
import PropTypes from "prop-types";
import BackToNewsButton from "./BackToNewsButton";
import RefreshCommentsButton from "./RefreshCommentsButton";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const NewsPage = (props) => {
  return (
    <>
      <Link to="/newspage">
        <BackToNewsButton />
      </Link>
      <RefreshCommentsButton />
      <h1>Title</h1>
      <span>
        <a href="">URL news</a>
      </span>
      <span>data</span>
      <span>author</span>
      <span>comment counter</span>
      <li>
        <ul>1st comment</ul>
        <ul>2nd comment</ul>
        <ul>3th comment</ul>
      </li>
    </>
  );
};

export default NewsPage;
