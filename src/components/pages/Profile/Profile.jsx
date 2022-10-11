import "./Profile.css";
import React, { useContext } from "react";
import ProfileContext from "../../../contexts/Profile-Context/Profile-Context";

function Profile() {
  const {profiles} = useContext(ProfileContext)
  return (
    <div className="profile">
      <h1>Profile</h1>
    </div>
  );
};

export default Profile;
