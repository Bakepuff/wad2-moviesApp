import React, {useEffect, useState} from "react";
import { Link, Route, withRouter } from "react-router-dom";
import {getCreditDetail} from '../api/tmdb-api'
import CreditInfo from "../components/creditInfo";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const CreditPage = props => {
  const { id } = props.match.params;
  const [credit,setCredit] = useState()

  useEffect(()=>{
    getCreditDetail(id).then(setCredit)
  },[])
  
  return (
    <>
      <div className="row">
        <div className="col-2">
          <button onClick={() => props.history.goBack()}>
            <FontAwesomeIcon icon={["fas", "arrow-circle-left"]} size="2x" />
            <span>{" Back"}</span>
          </button>
        </div>
      </div>
    {credit ? (
        <div style={{width:300}}>
          <CreditInfo credit={credit}/>
        </div>
      
    ) : (
      <p>Waiting for cast details</p>
    )}
  </>
  );
};

export default withRouter(CreditPage);
