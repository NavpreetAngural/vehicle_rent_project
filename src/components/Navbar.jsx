import React, { useState } from 'react';
import { Button, Modal } from 'antd';
import { NavLink } from 'react-router';
import rent_5 from "../assets/images/rent_5.jpg"
import logo from "../assets/images/logo.png"
import "../index.css"
import Login from './Login';
import Register from './Register';
const Navbar = () => {

    const [isModalOpen, setIsModalOpen] = useState(false);
    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleOk = () => {
        setIsModalOpen(true);
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };
    const [isLogin, setIsLogin] = useState(true);
    // console.log(isLogin)


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
                            <NavLink to="/about">About Us</NavLink>
                        </li>
                        <li className="li">
                            <NavLink to="/contact">Contact Us</NavLink>
                        </li>

                        <>
                            <Button type="primary" onClick={showModal}>
                                Login / Signup
                            </Button>
                            <Modal className='text-xl'
                                width={500} style={{ position: "sticky", }}
                                footer={null} open={isModalOpen} onOk={handleOk} onCancel={handleCancel} >
                                <main >
                                    <div className="flex items-center justify-center bg-[linear-gradient(to_bottom,white,rgb(180,215,228))]">
                                        <div className=" p-20 rounded-lg" style={{ padding: "30px" }}>
                                            {isLogin ? (
                                                <div>
                                                    <h2 className="text-2xl font-bold text-center " style={{ marginBottom: "20px" }}>Login</h2>
                                                    <Login />
                                                    <p className="mt-4 text-sm text-center">
                                                        Don't have an account?{" "}
                                                        <button
                                                            onClick={() => setIsLogin(false)}
                                                            className="text-blue-500 font-semibold"
                                                        >
                                                            Sign up
                                                        </button>
                                                    </p>
                                                </div>
                                            ) : (
                                                <div>
                                                    <h2 className="text-2xl font-bold text-center " style={{ marginBottom: "20px" }}>Sign Up</h2>
                                                    <Register />
                                                    <p className="mt-4 text-sm text-center">
                                                        Already have an account?{" "}
                                                        <button
                                                            onClick={() => setIsLogin(true)}
                                                            className="text-green-500 font-semibold"
                                                        >
                                                            Login
                                                        </button>
                                                    </p>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </main>
                            </Modal>
                        </>
                    </ul>
                </nav>
            </header>

        </div>
    )
}

export default Navbar
