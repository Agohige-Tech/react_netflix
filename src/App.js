import React from "react";
import "./App.css";
import Row from "./Row";
import requests from "./requests";
import Banner from "./Banner";
import Nav from "./Nav";

function App() {
  return (
    <div className="app">
      <Nav />
      <Banner />

      <Row
        title="Netflix Originals"
        fetchURL={requests.fetchNetflixOriginals}
        isLargeRow
      />
      <Row title="Trending Now" fetchURL={requests.fetchTrending} />
      <Row title="Top Rated" fetchURL={requests.fetchTopRated} />
      <Row title="Family Movies" fetchURL={requests.fetchFamilyMovies} />
      <Row
        title="Science Fiction Movies"
        fetchURL={requests.fetchScienceFictionMovies}
      />
      <Row title="Fantasy Movies" fetchURL={requests.fetchFantasyMovies} />
      <Row title="Comedy Movies" fetchURL={requests.fetchComedyMovies} />
      <Row title="Action Movies" fetchURL={requests.fetchActionMovies} />
      <Row title="Romance Movies" fetchURL={requests.fetchRomanceMovies} />
    </div>
  );
}

export default App;
