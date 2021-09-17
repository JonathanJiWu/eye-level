import React, { useState, useEffect } from "react";
import SearchBox from "./SearchBox";
import MovieList from "./MovieList";
// http://www.omdbapi.com/?
// s=star wars&
// apikey=fb99a468

const APICall = () => {
  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const getMovieRequest = async (searchValue) => {
    const url = `https://www.omdbapi.com/?s=${searchValue}&apikey=fb99a468`;
    const response = await fetch(url);
    const responseJson = await response.json();

    if (responseJson.Search) {
      setMovies(responseJson.Search);
    }
  };

  useEffect(() => {
    getMovieRequest(searchValue);
  }, [searchValue]);

  return (
    <div>
      <div>
        <SearchBox searchValue={searchValue} setSearchValue={setSearchValue} />
      </div>

    </div>
  );
};
export default APICall;
