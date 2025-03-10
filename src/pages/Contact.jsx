import React from 'react'
import contact from "../assets/images/contact.jpg"
import Footer from '../components/Footer'
import { Form, Input, Button } from "antd";
import Navbar from '../components/Navbar'
import { NavLink } from 'react-router';
import axios from 'axios';


const Contact = () => {
    const onFinish = (values) => {
        console.log("Form values:", values);
        try {
            axios.post('http://localhost:3000/api/contact/form', values)
                .then((response) => console.log(response))
        }
        catch (error) {
        }
    };
    return (
        <div className="bg-repeat bg-[length:100%_100%]  bg-fixed"
            style={{ backgroundImage: `url(${contact})` }}>
            <Navbar />
            <main style={{ backgroundColor: 'aliceblue', width: '60%', marginLeft: '40%' }}>
                <section>
                    <div style={{ padding: '50px' }}>
                        <Form layout="vertical" onFinish={onFinish}>
                            <h1 style={{ textAlign: "center", fontSize: "25px" }}>Contact Form</h1>
                            <Form.Item
                                label="Full Name"
                                name="FullName"
                                rules={[{ required: true, message: "Please enter your full name" }]}
                            >
                                <Input placeholder="Enter your full name" />
                            </Form.Item>

                            <Form.Item
                                label="Email"
                                name="Email"
                                rules={[
                                    { required: true, message: "Please enter your email" },
                                    { type: "email", message: "Enter a valid email" },
                                ]}
                            >
                                <Input placeholder="Enter your email" />
                            </Form.Item>

                            <Form.Item
                                label="Phone No"
                                name="Mobile"
                                rules={[{ required: true, message: "Please enter your phone number" }
                                ]}
                            >
                                <Input placeholder="Enter your phone number" maxLength={10} minLength={10}/>
                            </Form.Item>

                            <Form.Item
                                label="Subject"
                                name="Subject"
                                rules={[{ required: true, message: "Please enter the subject" }]}
                            >
                                <Input placeholder="Enter the subject" />
                            </Form.Item>

                            <Form.Item
                                label="Message"
                                name="Message"
                                rules={[{ required: true, message: "Please enter your message" }]}
                            >
                                <Input.TextArea placeholder="Enter your query here..." rows={4} />
                            </Form.Item>

                            <Form.Item style={{ textAlign: "center" }}>
                                <Button type="primary" htmlType="submit">
                                    Send Message
                                </Button>
                            </Form.Item>
                        </Form>
                    </div>
                </section>

                <section>
                    <div style={{ width: '100%', padding: '10px 150px' }}>
                        <center>
                            <h1 style={{ paddingBottom: '30px', fontSize: "25px" }}>Contact Information</h1>
                        </center>
                        <p style={{ fontSize: '18px' }}>
                            <i className="fa-solid fa-envelope"></i>
                            <NavLink to="mailto:drivedash@gmail.com"> drivedash@gmail.com</NavLink>
                        </p>
                        <p style={{ float: 'right', fontSize: '18px', marginTop: '-28px' }}>
                            <i className="fa-solid fa-phone"></i>
                            <NavLink to="tel:+91998876655"> +91998876655</NavLink>
                        </p>
                        <br />
                        <h3 style={{ display: 'inline', fontSize: '18px' }}>Address :</h3>
                        <span style={{ fontSize: '17px' }}>
                            123 Rental Street, Jalandhar, Punjab, 144001, India.
                        </span>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d13719.387682838025!2d76.69972754999999!3d30.7227036!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1739288931868!5m2!1sen!2sin"
                            width="600"
                            height="450"
                            style={{ border: 0, paddingTop: '20px', paddingBottom: '20px', borderRadius: '30px' }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                </section>

                <section>
                    <div style={{ width: '100%', padding: '10px 150px' }}>
                        <center>
                            <h1 style={{ paddingBottom: '30px', fontSize: "25px" }}>Operating Hours</h1>
                        </center>
                        <h3 style={{ display: 'inline' }}>Monday to Friday :</h3>
                        <span>9:00 AM to 6:00 PM</span>
                        <h3 style={{ display: 'inline', marginLeft: '70px' }}>Saturday :</h3>
                        <span>10:00 AM to 4:00 PM</span>
                        <center style={{ padding: '10px' }}>
                            <h3 style={{ display: 'inline' }}>Sunday :</h3>
                            <span> Closed </span>
                        </center>
                    </div>
                </section>

                <section>
                    <div style={{ width: '100%', padding: '10px 150px' }}>
                        <center>
                            <h1 style={{ paddingBottom: '10px', fontSize: "25px" }}>Social Media Links :</h1>
                            <br />
                            <i className="fa-brands fa-facebook"></i>
                            <NavLink to="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                                {' '}
                                www.facebook.com
                            </NavLink>
                            <br />
                            <br />
                            <i className="fa-brands fa-twitter"></i>
                            <NavLink to="https://twitter.com/" target="_blank" rel="noopener noreferrer">
                                {' '}
                                www.twitter.com
                            </NavLink>
                            <br />
                            <br />
                            <i className="fa-brands fa-instagram"></i>
                            <NavLink to="https://instagram.com/" target="_blank" rel="noopener noreferrer">
                                {' '}
                                www.instagram.com
                            </NavLink>
                            <br />
                            <br />
                            <i className="fa-brands fa-youtube"></i>
                            <NavLink to="https://youtube.com/" target="_blank" rel="noopener noreferrer">
                                {' '}
                                www.youtube.com
                            </NavLink>
                            <br />
                            <br />
                        </center>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    )
}

export default Contact
