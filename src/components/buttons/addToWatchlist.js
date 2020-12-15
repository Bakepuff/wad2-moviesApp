import React, { useContext } from "react";
import {MoviesContext} from "../../contexts/moviesContext";
import {message} from "antd";
import { withRouter } from "react-router-dom";

const AddToWatchlistButton = ({movie, history }) => {
  const context = useContext(MoviesContext);
  const handleAddToWatchlist = e => {
    e.preventDefault();
    if (!context.user) {
      message.warn('please login')
      history.push('/login')
      return
    }
    context.addToWatchlist(movie.id);
  };

  return (
    <button
      type="button"
      className="btn w-100 btn-primary"
      onClick={handleAddToWatchlist}
    >
      Add to Watch List
    </button>
  );
};

export default withRouter(AddToWatchlistButton);