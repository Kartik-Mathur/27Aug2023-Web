import React, { Fragment } from "react";
import { Routes, Route, Link, NavLink } from "react-router-dom";
import Home from "../Home/Home";
import About from "../About/About";
import Styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <Fragment>
      <div className={Styles["nav-bar"]}>
        
        <NavLink className={Styles["nav-item"]} to="home">
          Home
        </NavLink>

        <NavLink className={Styles["nav-item"]} to="about">
          About
        </NavLink>

      </div>
      {/* <Routes>
        <Route path="home" element={<Home />} />
        <Route path="about" element={<About />} />
      </Routes> */}
    </Fragment>
  );
};

export default Navbar;
