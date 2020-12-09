import React from "react";
import  './profileInfo.css'

const ProfileInfo = ({user}) => {
  return <div className={"wrap"}>
    {user.username}
  </div>;
};

export default ProfileInfo;