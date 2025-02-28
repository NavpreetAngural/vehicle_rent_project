import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import car1 from "../assets/images/car1.jpg"
import bike1 from "../assets/images/bike1.jpg"
import bike2 from "../assets/images/bike2.jpg"
import car2 from "../assets/images/car2.jpg"
import car3 from "../assets/images/car3.jpg"
import bike3 from "../assets/images/bike3.jpg"
import foot_banner from "../assets/images/foot_banner.jpg"
import men_1 from "../assets/images/men_1.jpg"
import men_3 from "../assets/images/men_3.jpg"
import bgimg from "../assets/images/bgimg.jpg"

import "../index.css"

const Home = () => {
    return (
        <>
            <div className="bg-repeat bg-[length:100%_100%]  bg-fixed"
                style={{ backgroundImage: `url(${bgimg})` }}>
                <Navbar />
                <main>
                    <one-section>
                        <div
                            style={{
                                position: "absolute",
                                top: 110,
                                left: 550,
                                wordSpacing: 10,
                                letterSpacing: 10
                            }}
                        >
                            <p
                                style={{
                                    fontSize: 50,
                                    fontFamily:
                                        'Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif'
                                }}
                            >
                                BOOK A VEHICLE
                            </p>
                            <p
                                style={{
                                    fontSize: 50,
                                    fontFamily:
                                        'Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif',
                                    textAlign: "center"
                                }}
                            >
                                FOR
                            </p>
                        </div>
                        <div style={{ height: 650 }}>
                            {/* <img src={rent_1} alt="" height="650px" width="100%" usemap="#book">
          <map name="book">
              <area shape="rect" coords="130 250 1450 410" href="/Bookings.html" alt="">
          </map> */}
                        </div>
                        <div style={{ position: "absolute", top: 540, left: 450 }}>
                            <input
                                type="text"
                                name=""
                                id="search"
                                placeholder="Search Vehicle Type"
                                style={{ fontSize: 20, width: 600, height: 35 }}
                            />
                            <i className="fa-solid fa-magnifying-glass" />
                        </div>
                    </one-section>
                    <two-section>
                        <div className="container">
                            <div style={{ width: "100%", marginTop: 20 }}>
                                <center>
                                    <h1
                                        style={{
                                            display: "inline",
                                            boxShadow: "1px 1px 1px",
                                            padding: 8,
                                            backgroundImage: "radial-gradient(white , rgb(180, 215, 228))",
                                            borderRadius: 10
                                        }}
                                    >
                                        Featured Vehicles
                                    </h1>
                                </center>
                            </div>
                            <div className="divs">
                                <img src={car1} alt="" />
                                <center>
                                    <h3> Name : Car </h3>
                                    <h3> Price : 7000 rs.</h3>
                                    <a href="">
                                        <button> View more...</button>
                                    </a>
                                </center>
                            </div>
                            <div className="divs">
                                <img src={bike1} alt="" />
                                <center>
                                    <h3> Name : Bike </h3>
                                    <h3> Price : 7000 rs.</h3>
                                    <a href="">
                                        <button> View more...</button>
                                    </a>
                                </center>
                            </div>
                            <div className="divs">
                                <img src={bike2} alt="" />
                                <center>
                                    <h3> Name : Bike </h3>
                                    <h3> Price : 7000 rs.</h3>
                                    <a href="">
                                        <button> View more...</button>
                                    </a>
                                </center>
                            </div>
                            <div className="divs">
                                {" "}
                                <img src={car2} alt="" />
                                <center>
                                    <h3> Name : Car </h3>
                                    <h3> Price : 7000 rs.</h3>
                                    <a href="">
                                        <button> View more...</button>
                                    </a>
                                </center>
                            </div>
                            <div className="divs">
                                {" "}
                                <img src={car2} alt="" />
                                <center>
                                    <h3> Name : Car </h3>
                                    <h3> Price : 7000 rs.</h3>
                                    <a href="">
                                        <button> View more...</button>
                                    </a>
                                </center>
                            </div>
                            <div className="divs">
                                <img src={bike3} alt="" />
                                <center>
                                    <h3> Name : Bike </h3>
                                    <h3> Price : 7000 rs.</h3>
                                    <a href="">
                                        <button> View more...</button>
                                    </a>
                                </center>
                            </div>
                            <div className="divs">
                                <img src={car3} alt="" />
                                <center>
                                    <h3> Name : Car </h3>
                                    <h3> Price : 7000 rs.</h3>
                                    <a href="">
                                        <button> View more...</button>
                                    </a>
                                </center>
                            </div>
                            <div className="divs">
                                <img src={car1} alt="" />
                                <center>
                                    <h3> Name : Car </h3>
                                    <h3> Price : 7000 rs.</h3>
                                    <a href="">
                                        <button> View more...</button>
                                    </a>
                                </center>
                            </div>
                            <div className="divs">
                                <img src={bike1} alt="" />
                                <center>
                                    <h3> Name : Bike </h3>
                                    <h3> Price : 7000 rs.</h3>
                                    <a href="">
                                        <button> View more...</button>
                                    </a>
                                </center>
                            </div>
                            <div className="divs">
                                <img src={bike2} alt="" />
                                <center>
                                    <h3> Name : Bike </h3>
                                    <h3> Price : 7000 rs.</h3>
                                    <a href="">
                                        <button> View more...</button>
                                    </a>
                                </center>
                            </div>
                        </div>
                    </two-section>
                    <third-section>
                        <div className="container-2">
                            <div style={{ width: "100%", padding: 25 }}>
                                <center>
                                    <h1
                                        style={{
                                            display: "inline",
                                            boxShadow: "1px 1px 1px",
                                            padding: 8,
                                            backgroundImage: "radial-gradient(white , rgb(180, 215, 228))",
                                            borderRadius: 10
                                        }}
                                    >
                                        Why Choose Us ?
                                    </h1>
                                </center>
                            </div>
                            <div className="left-section">
                                <ul>
                                    <li>
                                        <h2>
                                            {" "}
                                            <i className="fa-solid fa-car"> </i> Wide Range of Vehicles
                                        </h2>
                                    </li>
                                    <p>
                                        Choose from a diverse fleet of vehicles, including cars, bikes,
                                        scooters, SUVs.
                                    </p>
                                    <br />
                                    <li>
                                        <h2>
                                            <i className="fa-solid fa-mobile-retro"> </i> Easy Online
                                            Booking
                                        </h2>
                                    </li>
                                    <p>
                                        Book your vehicle in just a few clicks with our user-friendly
                                        platform."
                                    </p>
                                    <br />
                                    <li>
                                        <h2>
                                            <i className="fa-solid fa-seedling" /> Environmentally Friendly
                                            Options
                                        </h2>
                                    </li>
                                    <p>
                                        Choose from our range of eco-friendly vehicles, including electric
                                        and hybrid cars.
                                    </p>
                                    <br />
                                    <li>
                                        <h2>
                                            <i className="fa-solid fa-wallet" /> Fast and Secure Payments
                                        </h2>
                                    </li>
                                    <p>
                                        Secure payment options with instant confirmation for hassle-free
                                        bookings.
                                    </p>
                                    <br />
                                </ul>
                            </div>
                            <div className="right-section">
                                <ul>
                                    <li>
                                        <h2>
                                            <i className="fa fa-star " /> Positive Customer Reviews
                                        </h2>
                                    </li>
                                    <p>Rated 4.8/5 by thousands of satisfied customers.</p>
                                    <br />
                                    <li>
                                        <h2>
                                            <i className="fa-solid fa-money-bill-transfer" /> No Deposit
                                            Required
                                        </h2>
                                    </li>
                                    <p>Enjoy zero deposit requirements on most vehicles</p>
                                    <br />
                                    <li>
                                        <h2>
                                            <i className="fa-solid fa-xmark" /> Free Cancellation
                                        </h2>
                                    </li>
                                    <p>
                                        Cancel or modify your booking for free up to 24 hours before
                                        pickup.
                                    </p>
                                    <br />
                                    <li>
                                        <h2>
                                            <i className="fa-solid fa-gear" /> Get Your Own Modified Vehicle
                                        </h2>
                                    </li>
                                    <p>
                                        You can tell us which type of vehicle you wants any type of
                                        customization vehcile
                                    </p>
                                    <br />
                                </ul>
                            </div>
                        </div>
                    </third-section>
                    <forth-section>
                        <div className="container">
                            <div style={{ width: "100%", marginTop: 20 }}>
                                <center>
                                    <h1
                                        style={{
                                            display: "inline",
                                            boxShadow: "1px 1px 1px",
                                            padding: 8,
                                            backgroundImage: "radial-gradient(white , rgb(180, 215, 228))",
                                            borderRadius: 10
                                        }}
                                    >
                                        Testimonials{" "}
                                    </h1>
                                </center>
                            </div>
                            <div className="divss">
                                <img src={men_1} alt="men" />
                                <center>
                                    <h3> John </h3>
                                    <h3> Rating : 5/5 </h3>
                                    <span className="fa fa-star checked" />
                                    <span className="fa fa-star checked" />
                                    <span className="fa fa-star checked" />
                                    <span className="fa fa-star checked" />
                                    <span className="fa fa-star checked" />
                                </center>
                            </div>
                            <div className="divss">
                                <img src={men_3} alt="men" />
                                <center>
                                    <h3> John </h3>
                                    <h3> Rating : 4/5 </h3>
                                    <span className="fa fa-star checked" />
                                    <span className="fa fa-star checked" />
                                    <span className="fa fa-star checked" />
                                    <span className="fa fa-star checked" />
                                    <span className="fa fa-star " />
                                </center>
                            </div>
                            <div className="divss">
                                <img src={men_1} alt="men" />
                                <center>
                                    <h3> John </h3>
                                    <h3> Rating : 5/5 </h3>
                                    <span className="fa fa-star checked" />
                                    <span className="fa fa-star checked" />
                                    <span className="fa fa-star checked" />
                                    <span className="fa fa-star checked" />
                                    <span className="fa fa-star checked" />
                                </center>
                            </div>
                            <div className="divss">
                                <img src={men_1} alt="men" />
                                <center>
                                    <h3> John </h3>
                                    <h3> Rating : 5/5 </h3>
                                    <span className="fa fa-star checked" />
                                    <span className="fa fa-star checked" />
                                    <span className="fa fa-star checked" />
                                    <span className="fa fa-star checked" />
                                    <span className="fa fa-star checked" />
                                </center>
                            </div>
                            <div className="divss">
                                <img src={men_1} alt="men" />
                                <center>
                                    <h3> John </h3>
                                    <h3> Rating : 5/5 </h3>
                                    <span className="fa fa-star checked" />
                                    <span className="fa fa-star checked" />
                                    <span className="fa fa-star checked" />
                                    <span className="fa fa-star checked" />
                                    <span className="fa fa-star checked" />
                                </center>
                            </div>
                            <div className="divss">
                                <img src={men_1} alt="men" />
                                <center>
                                    <h3> John </h3>
                                    <h3> Rating : 5/5 </h3>
                                    <span className="fa fa-star checked" />
                                    <span className="fa fa-star checked" />
                                    <span className="fa fa-star checked" />
                                    <span className="fa fa-star checked" />
                                    <span className="fa fa-star checked" />
                                </center>
                            </div>
                        </div>
                    </forth-section>
                    <fifth-section>
                        <div className="container-3">
                            <div style={{ width: "100%" }}>
                                <center>
                                    <h1
                                        style={{
                                            display: "inline",
                                            boxShadow: "1px 1px 1px",
                                            padding: 8,
                                            backgroundImage: "radial-gradient(white , rgb(180, 215, 228))",
                                            borderRadius: 10
                                        }}
                                    >
                                        Offers{" "}
                                    </h1>
                                </center>
                            </div>
                            <div style={{ width: "90%" }}>
                                <img
                                    src={foot_banner}
                                    height="500px"
                                    width="100%"
                                    style={{ borderRadius: 50, boxShadow: "5px 5px 5px black" }}
                                />
                            </div>
                            <div style={{ width: "100%" }}>
                                <center>
                                    <a href="/Signup.html">
                                        <button style={{ width: "10%", boxShadow: "3px 3px 3px" }}>
                                            {" "}
                                            Sign Up
                                        </button>
                                    </a>
                                    <br />
                                    <br />
                                    <h2 style={{ marginLeft: 15 }}> To get this offer...</h2>
                                </center>
                            </div>
                        </div>
                    </fifth-section>
                </main>
                <Footer />
            </div>
        </>

    )
}

export default Home
