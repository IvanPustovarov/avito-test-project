import './App.css';
import React, {useState, useEffect} from "react";

//components
import MainPage from './components/MainPage';
import NewsPage from './components/NewsPage';


const NEWSTORIES = "https://hacker-news.firebaseio.com/v0/newstories.json?print=pretty";

const App = () => {

  const requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };

  fetch(NEWSTORIES, requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));

  return (
    <div className="App">
     <MainPage/>
     <NewsPage/>
    </div>
  );
}

export default App;
