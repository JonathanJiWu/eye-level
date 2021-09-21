import React, { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import PrimarySearchAppBar from "./components/AppBar";
import MovieList from "./components/MovieList";
import SearchBox from "./components/SearchBox";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { Typography } from "@mui/material";
import CssBaseline from "@material-ui/core/CssBaseline";
import PersonalWatchList from './pages/PersonalWatchList'
import UserProfile from "./pages/UserProfile";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  input: {
    color: "white",
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));
const theme = createMuiTheme({
  typography: {
    fontFamily: "space+Mono",
    fontWeightLight: 400,
    fontWeightBold: 700,
  },

  palette: {
    type: "dark",
    background: {
      default: "#d2dae2",
    },
    primary: {
      // light: will be calculated from palette.primary.main,
      main: "#1e272e",
      // dark: will be calculated from palette.primary.main,
      // contrastText: will be calculated to contrast with palette.primary.main
    },
    secondary: {
      light: "#34e7e4",
      main: "#00d8d6",
      dark: "#4bcffa",
      contrastText: "#0fbcf9",
    },
    // Used by `getContrastText()` to maximize the contrast between
    // the background and the text.
    contrastThreshold: 3,
    // Used by the functions below to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset: 0.2,
  },
});

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
    <ThemeProvider theme={theme}>
      <CssBaseline />
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
            <MovieList movies={movies} />
          </Grid>

          <switch>
            <Route exact path="/personalwatchlist">
              <PersonalWatchList/>
            </Route>

            <Route exact path="/userprofile">
              <UserProfile />
            </Route>
          </switch>
          
        </Grid>
      </div>
    </ThemeProvider>
  );
}
