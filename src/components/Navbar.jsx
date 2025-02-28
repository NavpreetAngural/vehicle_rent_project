import React from 'react'
import { NavLink } from 'react-router'
import logo from "../assets/images/logo.png"
import "../index.css"
const Navbar = () => {
    return (
        <div>
            <header id="head">
                <nav className="navbar">
                    <NavLink href="index.html">
                        <img
                            src={logo}
                            alt=""
                            height="70px"
                            width="200px"
                            id="logo"
                        />
                    </NavLink>
                    <ul className="nav-links">
                        <li className="li">
                            <NavLink to="/">Home</NavLink>
                        </li>
                        <li className="li">
                            <NavLink to="/vehicles">Vehicles</NavLink>
                        </li>
                        <li className="li">
                            <NavLink to="/bookings">Bookings</NavLink>
                        </li>
                        <li className="li">
                            <NavLink to="/aboutUs">About Us</NavLink>
                        </li>
                        <li className="li">
                            <NavLink to="/contactUs">Contact Us</NavLink>
                        </li>
                        <li className="li">
                            <NavLink to="/login">Login</NavLink>
                        </li>
                    </ul>
                </nav>
            </header>

        </div>
    )
}

export default Navbar
