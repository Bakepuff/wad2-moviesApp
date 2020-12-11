import React from "react";
import './creditInfo.css'

const CreditInfo = ({credit}) => {
  const {person={}} = credit
  return <div className={"wrap1"}>
    <img
      src={`https://image.tmdb.org/t/p/w500/${person.profile_path}`}
      alt={person.name}
    />
    <div className={"title"}>person</div>
    <div className={"info"}>
      <li className={"key"}>credit_type</li>
      <li>{credit.credit_type}</li>
      <li className={"key"}>department</li>
      <li>{credit.department}</li>
      <li className={"key"}>job</li>
      <li>{credit.job}</li>
    </div>

  </div>;
};

export default CreditInfo;
