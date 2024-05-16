import React, { createContext, useEffect, useState } from "react";

const URL = "https://dummyjson.com/users?limit=100";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [users, setUsers] = useState([]);

  const fetchUsers = async () => {
    try {
      const response = await fetch(URL);
      const data = await response.json();
      setUsers(data);
    } catch (error) {
      console.log("Error in fetching Users in context", error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return <UserContext.Provider value={users}>{children}</UserContext.Provider>;
};
