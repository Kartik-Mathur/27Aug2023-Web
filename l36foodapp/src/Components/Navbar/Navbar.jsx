import React from 'react'
import {NavLink} from 'react-router-dom';

const Navbar = () => {
  return (
    <>
        <NavLink to="food">Home</NavLink>
        <NavLink to="cart">Cart</NavLink>
    </>
  ) 
}

export default Navbar