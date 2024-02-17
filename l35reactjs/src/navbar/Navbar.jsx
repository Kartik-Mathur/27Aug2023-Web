import React, { useContext } from "react";
import navDetails from "../utilities/navDetails";
import { myContext } from "../App";

const Navbar = () => {
    const updatePath = useContext(myContext);
    // console.log(updatePath)
    const clickHandler = (ev)=>{
        ev.preventDefault();
        console.log(ev.target.innerText);
        updatePath(ev.target.innerText);
    }
  return (
    <nav>
      {
      navDetails.map((item) => (
        <a onClick={clickHandler} href={item.path}>{item.text}</a>
      ))
      }
    </nav>
  );
};

export default Navbar;
