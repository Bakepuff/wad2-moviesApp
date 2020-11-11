import React, { useContext } from "react";
import {MoviesContext} from "../../contexts/moviesContext";

const AddToWatchButton = ({ movie }) => {
  const context = useContext(MoviesContext);
  const handleAddToWatch = e => {
    e.preventDefault();
    context.addToWatch(movie.id);
  };

  return (
    <button
      type="button"
      className="btn w-100 btn-primary"
      onClick={handleAddToWatch}
    >
      Add to Watch List
    </button>
  );
};

export default AddToWatchButton;