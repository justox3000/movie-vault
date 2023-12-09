import React from "react";
import Suggestion from "../components/Suggestion";
import { UseSelector, useSelector } from "react-redux/es/hooks/useSelector";


const SearchMoviesSuggestion = () => {
  const { search } = useSelector((store) => store);

  return(< Suggestion movies={search}/>);
}

export default SearchMoviesSuggestion;
