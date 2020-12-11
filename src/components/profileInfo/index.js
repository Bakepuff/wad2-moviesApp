import React from "react";
import  './profileInfo.css'

const ProfileInfo = ({user}) => {
  return <div className={"wrap"} className="user-tab">
    {user.username}
  </div>;
};

export default ProfileInfo;