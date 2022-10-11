import { createContext, useEffect, useState } from "react";
import "./Profile-Context.css";

const profileContext = createContext();
function ProfileContext({ children }) {
  const [profile, setProfile] = useState([]);

  return (
    <div className="profile-context">
      <profileContext.Provider value={{ profile, setProfile }}>
        {children}
      </profileContext.Provider>
    </div>
  );
};

export default ProfileContext;
