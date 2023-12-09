import React from "react";
import { TextField, Paper, MenuItem } from "@mui/material";
import { useDispatch } from "react-redux";
import { searchMovies } from "../redux/search";
import Downshift from "downshift";
import { Link } from "react-router-dom";

const Suggestion = (movies) => {
  const dispatch = useDispatch();

  const inputOnChange = (event) => {
    if(!event.target.value) {
      return;
    }

    dispatch(searchMovies(event.target.value));

  }

  return(
    <Downshift>
    {({
      getInputProps,
      getItemProps,
      getMenuProps,
      getLabelProps,
      isOpen,
      inputValue,
      highlightedIndex,
      selectedItem
    }) => (
      <>
        <TextField
          id = "search"
          placeholder = "Search"
          fullWidth = {true}
          sx = {{mb: 5}}
          variant="standard"
          InputProps={{
            ...getInputProps({
              onChange: inputOnChange
            })
          }}
        />
          {
            isOpen ?
            (<Paper square={true} {...getMenuProps()}>
              {
                movies.results
                  .slice (0, 10)
                  .filter((item) =>
                    !inputValue||
                    item.title
                    .toLowerCase()
                    .includes(inputValue.toLowerCase())
                    ).map((item, index) => (
                      <MenuItem
                        {...getItemProps({
                          index,
                          key: item.id,
                          selected: highlightedIndex === index,
                          style: {
                            fontWeight: selectedItem === item ? 500 : 400,
                          }
                        })}>
                        <Link to={`/movie/${item.id}`}>
                        </Link>
                      </MenuItem>
                    )
                    ))
              }
            </Paper>)
            : null
          }
      </>
    )}
      {/* <TextField
        id = "search"
        placeholder = "Search"
        fullWidth = {true}
        sx = {{mb: 5}}
        variant="standard"
        InputProps={{
          onChange: inputOnChange
        }}
      /> */}
    </Downshift>
  );
}

export default Suggestion;
