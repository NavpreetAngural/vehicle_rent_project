import React from 'react'
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input, Flex } from 'antd';
import axios from 'axios';

const Login = () => {
    

    const onFinish = (values) => {
        
        axios.post("http://localhost:3000/api/auth/login", values)
            .then((response) => {
                if (response.data.success === true)
                    toast.success(response.data.message);
                else {
                    toast.error(response.data.message);
                }
            })
            .catch((error) => {
                toast.error(error.response?.data?.error );
            });
    };
    return (
            
                <center>
                    
                    <Form
                        name="login"

                        onFinish={onFinish}
                        style={{
                            maxWidth: 400,
                        }}
                    >
                        <Form.Item
                            name="email"
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
                            <Button block type="primary" htmlType="submit" style={{ marginBottom: 10 }}>
                                Log in
                            </Button>
                            {/* or <NavLink to="/register">Register now!</NavLink> */}
                        </Form.Item>
                    </Form>
                </center>
    )
}

export default Login
