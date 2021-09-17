import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import OverLay from "./OverLay";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { Container } from "@material-ui/core";
import { CardHeader, IconButton } from "@material-ui/core";
import AddIcon from "@mui/icons-material/Add";

const MovieList = (props) => {
  const FavoritesComps = props.FavoritesComps;
  return (
    <Container width="95vw">
      <Grid container spacing={5} width='90vw'>
        {props.movies.map((movie, index) => (
          <Grid item xs={12} sm={6} md={3} lg={2}>
            <Card color="Secondary" width={350}>
              <CardHeader
                action={
                  <IconButton aria-label="add">
                    {/* onClick={handleAddFavList} */}
                    <AddIcon />
                  </IconButton>
                }
              />
              <CardMedia
                component="img"
                height="550"
                image={movie.Poster}
                alt={movie.Title}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {movie.Title}
                </Typography>
                <Typography gutterBottom variant="h5" component="div">
                  {movie.Year}
                </Typography>
              </CardContent>
            </Card>
            <OverLay />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default MovieList;
