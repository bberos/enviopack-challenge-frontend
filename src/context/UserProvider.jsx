import React, { useContext, createContext, useState, useEffect } from "react";
import user from "./../assets/json/profile.json";
const UserContext = createContext();

export const useUserData = () => useContext(UserContext);

export default function UserProvider({ children }) {
  const [userId, setUserId] = useState(() =>
    JSON.parse(window.localStorage.getItem("@user_id") || "[]")
  );
  const [fakeData, setFakeData] = useState(user);
  const [userData, setUserData] = useState();

  const fetchUser = () => {
    let user = fakeData;
    setUserData(user.profile);
  };
  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <UserContext.Provider value={{ userData, setUserData }}>
      {children}
    </UserContext.Provider>
  );
}
