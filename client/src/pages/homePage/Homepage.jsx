import React from "react";
import { Link } from "react-router-dom";
import styles from "./Homepage.module.css";

const allLinks = [
  {
    link: "animals",
    name: "Animals",
  },
  {
    link: "users",
    name: "Users",
  },
  {
    link: "products",
    name: "Products",
  },
  {
    link: "dogs",
    name: "Dogs",
  },
  {
    link: "superheroes",
    name: "Superheroes",
  },
];

const Homepage = () => {
  const signedUser = JSON.parse(localStorage.getItem("signedUser"));

  console.log("user on homepage", signedUser);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        justifyContent: "center",
        marginTop: "2rem",
        gap: "3rem",
      }}
    >
      <div
        style={{
          display: "flex",
          width: "100%",
          justifyContent: "center",
          marginTop: "2rem",
          gap: "3rem",
        }}
      >
        {allLinks &&
          allLinks.map((link) => (
            <div
              className={styles.container}
              key={link.name}
              style={
                (signedUser === null && link.name === "Animals") ||
                (signedUser === null && link.name === "Superheroes")
                  ? { backgroundColor: " #dddddd" }
                  : {}
              }
            >
              {(signedUser === null && link.name === "Animals") ||
              (signedUser === null && link.name === "Superheroes") ? (
                <button disabled className={styles.disabledBtn}>
                  {link.name}
                </button>
              ) : (
                <Link to={`/${link.link}`}>{link.name}</Link>
              )}
            </div>
          ))}
      </div>
    </div>
  );
};

export default Homepage;
