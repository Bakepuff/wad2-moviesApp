import React, { useContext } from "react";
import {MoviesContext} from "../../contexts/moviesContext";

const AddToWatchButton = ({ movie }) => {
  const context = useContext(MoviesContext);


  return (
    <button
      type="button"
      className="btn w-100 btn-primary"
     
    >
      Add to Watch List
    </button>
  );
};

export default AddToWatchButton;