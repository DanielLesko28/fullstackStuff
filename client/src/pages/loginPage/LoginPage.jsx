import React, { useContext, useState } from "react";
import { UserContext } from "../../context/UserContext";
import styles from "./LoginPage.module.css";
import { Button } from "@chakra-ui/react";

const LoginPage = () => {
  const { users } = useContext(UserContext);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = () => {
    const user = users.find(
      (user) => user.username === username && user.password === password
    );

    if (user) {
      // Successful login, you can redirect or perform other actions here
      console.log("Login successful!", user);
      localStorage.setItem("signedUser", JSON.stringify(user));
      window.location.href = "/";
      setError("");
    } else {
      setError("Invalid credentials. Please try again.");
    }
  };

  return (
    <div className={styles.loginWrapper}>
      <div>
        <h2>Login Form</h2>
        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <Button colorScheme="telegram" onClick={handleLogin}>
          Login
        </Button>
        {error && <p style={{ color: "red" }}>{error}</p>}
      </div>
    </div>
  );
};

export default LoginPage;
