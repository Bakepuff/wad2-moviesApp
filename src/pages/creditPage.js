import React, {useEffect, useState} from "react";
import { withRouter } from "react-router-dom";
import {getCreditDetail} from '../api/tmdb-api'
import CreditInfo from "../components/creditInfo";
import CreditKnown from "../components/creditKnown";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const CreditPage = props => {
  const { id } = props.match.params;
  const [credit,setCredit] = useState()

  useEffect(()=>{
    getCreditDetail(id).then(setCredit)
  },[id])
  
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
      <div style={{display:'flex',flexDirection:"row"}}>
        <div style={{width:300}}>
          <CreditInfo credit={credit}/>
        </div>
        <div style={{flex:1}}>
        <CreditKnown credit={credit}/>
        </div>
        </div>
      
    ) : (
      <p>Waiting for cast details</p>
    )}
  </>
  );
};

export default withRouter(CreditPage);
