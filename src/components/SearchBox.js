import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

const WhiteTextTypography = withStyles({
  root: {
    color: "#FFFFFF",
  },
})(Typography);

const SearchBox = (props) => {
  return (
    <Box
      component="form"
      sx={{
        "& > :not(style)": { m: 3, width: "85vw" },
      }}
      noValidate
      autoComplete="off"
    >
      <WhiteTextTypography variant="h3">
        <TextField
          value={props.value}
          onChange={(event) => props.setSearchValue(event.target.value)}
          id="outlined-basic"
          label="Type to search a movie"
          variant="outlined"
          fullWidth
        />
      </WhiteTextTypography>
    </Box>
  );
};

export default SearchBox;
