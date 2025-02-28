import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import rent_5 from "../assets/images/rent_5.jpg"
import { Button, Checkbox, Form, Input, Flex } from 'antd';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { NavLink } from 'react-router';

const Login = () => {
    const [formData, setFormData] = useState("")
    console.log(formData)

    const onFinish = (values) => {
        // console.log('Received values of form: ', values);
        setFormData(values)
    };
    return (
        <div className="bg-repeat bg-[length:100%_100%]  bg-fixed"
            style={{ backgroundImage: `url(${rent_5})` }}>
            <Navbar />
            <main>
                <div style={{ height: 700 }} className="main-1">
                    <form className="login_form" action="index.html">
                        <div style={{ width: "40%" }}>
                            <center>
                                <Form
                                    name="login"
                                    onFinish={onFinish}
                                    style={{
                                        maxWidth: 400,
                                    }}
                                >
                                    <Form.Item
                                        name="username"
                                        rules={[
                                            {
                                                required: true,
                                                message: 'Please input your Username!',
                                            },
                                        ]}
                                    >
                                        <Input prefix={<UserOutlined />} placeholder="Username" />
                                    </Form.Item>
                                    <Form.Item
                                        name="password"
                                        rules={[
                                            {
                                                required: true,
                                                message: 'Please input your Password!',
                                            },
                                        ]}
                                    >
                                        <Input prefix={<LockOutlined />} type="password" placeholder="Password" />
                                    </Form.Item>
                                    <Form.Item>
                                        <Flex justify="space-between" align="center">
                                            <Form.Item name="remember" valuePropName="checked" noStyle>
                                                <Checkbox>Remember me</Checkbox>
                                            </Form.Item>
                                            {/* <a href="">Forgot password</a> */}
                                        </Flex>
                                    </Form.Item>

                                    <Form.Item>
                                        <Button block type="primary" htmlType="submit">
                                            Log in
                                        </Button>
                                        or <NavLink to="/register">Register now!</NavLink>
                                    </Form.Item>
                                </Form>
                            </center>
                        </div>
                    </form>
                </div>
            </main>

            <Footer />
        </div>
    )
}

export default Login
