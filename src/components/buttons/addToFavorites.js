import React, { useContext } from "react";
import {MoviesContext} from "../../contexts/moviesContext";
import {message} from "antd";
import { withRouter } from "react-router-dom";

const AddToFavoriteButton = ({ movie, history }) => {
  const context = useContext(MoviesContext);

  const handleAddToFavorite = e => {
    e.preventDefault();
    if (!context.user) {
      message.warn('please login')
      history.push('/login')
      return
    }
    context.addToFavorites(movie.id);
  };
  return (
    <button
      type="button"
      className="btn w-100 btn-primary"
      onClick={handleAddToFavorite}
    >
      Add to Favorites
    </button>
  );
};

export default withRouter(AddToFavoriteButton);