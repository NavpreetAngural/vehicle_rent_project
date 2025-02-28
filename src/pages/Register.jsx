import React from 'react'
import {
    Button,
    Checkbox,
    Form,
    Input,
    Radio,
    DatePicker
} from 'antd';
import { NavLink } from 'react-router';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import rent_7 from "../assets/images/rent_7.jpg"


const Register = () => {
    

    const onFinish = (values) => {
        console.log('Received values of form: ', values);
       
    };
    return (
        <div className="bg-repeat bg-[length:100%_100%]  bg-fixed"
            style={{ backgroundImage: `url(${rent_7})` }}>
            <Navbar />
            <main>
                <div style={{ height: 700 }} className="main-1">
                    <form className="signup_form" >
                        <div style={{ height: 800 }}>
                            <center>
                                <Form
                                    name="register"
                                    onFinish={onFinish}
                                    style={{
                                        maxWidth: 800,
                                    }}
                                >
                                    <Form.Item
                                        name="fullname"
                                        label="Full Name"
                                    >
                                        <Input />
                                    </Form.Item>
                                    <Form.Item
                                        name="email"
                                        label="E-mail"
                                    >
                                        <Input />
                                    </Form.Item>

                                    <Form.Item
                                        name="password"
                                        label="Password">
                                        <Input.Password />
                                    </Form.Item>

                                    <Form.Item
                                        name="confirm"
                                        label="Confirm Password">
                                        <Input.Password />
                                    </Form.Item>

                                    <Form.Item
                                        label="Date Of Birth"
                                        name="DOB"
                                    >
                                        <DatePicker />
                                    </Form.Item>

                                    <Form.Item
                                        name="phone"
                                        label="Phone Number"
                                    >
                                        <Input />
                                    </Form.Item>

                                    <Form.Item
                                        name="gender"
                                        label="Gender"
                                    >
                                        <Radio.Group>
                                            <Radio value="Male">Male</Radio>
                                            <Radio value="Female">Female</Radio>
                                        </Radio.Group>
                                    </Form.Item>

                                    <Form.Item
                                        name="address"
                                        label="Address">
                                        <Input />
                                    </Form.Item>

                                    <Form.Item
                                        name="agreement"
                                        valuePropName="checked"
                                        rules={[
                                            {
                                                validator: (_, value) =>
                                                    value ? Promise.resolve() : Promise.reject(new Error('Should accept agreement')),
                                            },
                                        ]}
                                    >
                                        <Checkbox>
                                            I have read the <NavLink to=''>agreement</NavLink>
                                        </Checkbox>
                                    </Form.Item>
                                    <Form.Item >
                                        <Button type="primary" htmlType="submit">
                                            Register
                                        </Button>
                                        <span style={{ marginLeft: "10px" }}>If registered , <NavLink to="/login"> Login </NavLink></span>
                                    </Form.Item>
                                </Form>
                            </center>
                        </div>
                    </form>
                </div>
            </main >
            <Footer />
        </div >
    )
}

export default Register
