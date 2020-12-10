import React from "react";
import { Link } from "react-router-dom";

const SeeDetails = ({ movie }) => {
  return (
    <Link
      className="btn w-100 btn-primary "
      to={{
        pathname: `/movies/${movie.id}`,
        state: {
          movie: movie
        }
      }}
    >
      Details
    </Link>
  );
};

export default SeeDetails;