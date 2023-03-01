import React, { useState, useEffect } from "react";
import axios from "./axios";
import "./Row.css";
import Youtube from 'react-youtube';
import movieTrailer from "movie-trailer";

const base_url = "https://image.tmdb.org/t/p/original";
function Row({ title, fetchUrl, isLargeRow}) {

  const [movies, setMovies] = useState([]); // we have an movies array
  //The useEffect Hook allows you to perform side effects in your components.
  
  const [trailerUrl, setTrailerUrl] = useState("");
  useEffect(() => {
    //if [], run once and don't run again
    //if [movies] runs every single time movies changes
    async function fetchData() {
      //for fetching data
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      // console.log(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]); // use fetchUrl inside [], to tell we are using fetchUrl from outside of useEffect

  // console.log(movies);

  const opts={
    height: "390",
    width: "100%",
    playVars:{
      // https://developers.google.com/youtube/player_parameters
      autoplay:1,
    },
  };

  const handleClick = (movie) =>{
    if(trailerUrl){
      setTrailerUrl("");
    } else{
      movieTrailer(movie?.name || "")
      .then((url)=>{
        const urlParams = new URLSearchParams(new URL(url).search);
        setTrailerUrl(urlParams.get("v"));
      })
      .catch((error)=> console.log(error));
    }
  };

  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row_posters">
        {movies.map((movie) => (
          <img
          key={movie.id}
          onClick={() => handleClick(movie)}
            className={`row_poster ${isLargeRow && "row_posterLarge"}`}
            src={`${base_url}${
                isLargeRow ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.name}
          />
        ))}
      </div>
      {trailerUrl && <Youtube videoId={trailerUrl} opts={opts}/>}
    </div>
  );
}

export default Row;
