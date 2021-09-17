import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const MovieList = (props) => {
  const FavoritesComps = props.FavoritesComps;
  return (
    <>
      {props.movies.map((movie, index) => (
        <>
          <img src={movie.Poster} alt={movie.Title}></img>
          <h2>{movie.Title}</h2>
        </>
      ))}
	  
    </>
  );
};

export default MovieList;
