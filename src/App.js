import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import PrimarySearchAppBar from "./components/AppBar";
import MovieList from "./components/MovieList";
import SearchBox from "./components/SearchBox";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

export default function CenteredGrid() {
  const classes = useStyles();
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
    <div className={classes.root}>
      <PrimarySearchAppBar />
      <Grid container spacing={3}>

        <Grid item xs={12}>
          <SearchBox
            searchValue={searchValue}
            setSearchValue={setSearchValue}
            className={classes.paper}
          />
        </Grid>

        <Grid item xs={12}>
          <MovieList movies={movies} className={classes.paper} />
        </Grid>
        
      </Grid>
    </div>
  );
}
