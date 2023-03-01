import React from 'react';
import Row from './Row';
import requests from './requests';
import './App.css';
import Banner from "./Banner";
import Nav from "./Nav";

function App() {
  return (
    <div className="App">
      <Nav/>
      <Banner />
      {/* {Banner} */}
      <Row 
      title ="NETFLIX ORIGINALS" 
      fetchUrl={requests.fetchNetflixOriginals}
      isLargeRow
      />
      <Row title ="Trending Now" fetchUrl={requests.fetchTrending} isLargeRow/>
      <Row title ="Top Rated" fetchUrl={requests.fetchTopRated} isLargeRow/>
      <Row title ="Action Movies" fetchUrl={requests.fetchActionMovies} isLargeRow/>
      <Row title ="Comedy Movies" fetchUrl={requests.fetchComedyMovies} isLargeRow/>
      <Row title ="Horror Movies" fetchUrl={requests.fetchHorrorMovies} isLargeRow/>
      <Row title ="Romantic Movies" fetchUrl={requests.fetchRomanceMovies} isLargeRow/>
      <Row title ="Documentaries" fetchUrl={requests.fetchDocumantaries} isLargeRow/>
    </div>
  );
}

export default App;
