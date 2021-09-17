import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

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
      <TextField
        value={props.value}
        onChange={(event) => props.setSearchValue(event.target.value)}
        id="outlined-basic"
        label="Type to search a movie"
        variant="outlined"
		color='primary'
		fullWidth
      />
    </Box>
  );
};

export default SearchBox;
