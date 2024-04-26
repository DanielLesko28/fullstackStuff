import React from "react";
import styles from "./Navbar.module.css";
import ModalWindow from "../modal/Modal";
import Logo from "../../assets/newLogo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className={styles.navbarContainer}>
      {/* <h1>D&R</h1> */}
      <div className={styles.navPic}>
        <Link to="/">
          <img src={Logo} alt="myLogo" />
        </Link>
      </div>
      <div>
        <ModalWindow />
      </div>
    </div>
  );
};

export default Navbar;
