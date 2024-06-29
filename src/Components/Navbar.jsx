import React from "react";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.navlogo}>
          <img src="/assets/logo.jpg" alt="nothing" />
        </div>
        <div className={styles.pages}>
          <ul>
            <li>Menu</li>
            <li>Location</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>
        <div>
          <button>Login</button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
