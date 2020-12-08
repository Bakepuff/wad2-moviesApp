import React from "react";
import './creditKnown.css'


const CreditKnown = ({credit}) => {
  const {person={}} = credit
  return <div className={"wrap2"}>
    <div className={"name"}>{person.name}</div>
    <div className={"title"}>known for</div>
    <div className={"known"}>
      {person.known_for.map(item=>(
        <div className={"card1"}>
          <img
            src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`}
            alt={item.title}
          />
          <div className={"name"}>{item.title}</div>
        </div>
      ))}
    </div>
  </div>;
};

export default CreditKnown;
