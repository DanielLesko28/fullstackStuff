import React, { useContext } from "react";
import { UserContext } from "../../context/UserContext";
import styles from "./UsersPage.module.css";

const UsersPage = () => {
  const { users } = useContext(UserContext);

  console.log("users", users);

  return (
    <div>
      {users && (
        <div className={styles.container}>
          {users.map((user) => (
            <div
              key={user.id}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <h1>
                {user.firstName} {user.lastName}
              </h1>
              <h2>{user.username}</h2>
              <h2>{user.password}</h2>
              <img
                src={user.image}
                style={{ width: "70px", height: "auto", marginBottom: "2rem" }}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default UsersPage;
