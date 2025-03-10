import React from 'react'
import {
    Button,
    Form,
    Input,
    Radio,
} from 'antd';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router';

const Register = () => {
const navigate = useNavigate()

    const onFinish = (values) => {
        console.log("Received values of form: ", values);

        axios.post("http://localhost:3000/api/auth/register", values)
            .then((response) => {
                if (response.data.success === true){
                    toast.success(response.data.message)
                    navigate("/"); 
                }
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
                name="register"
                onFinish={onFinish}
                style={{
                    maxWidth: 800,
                }}
            >

                <Form.Item
                    name="fullname"
                    label="Full Name"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your Fullname!',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    name="email"
                    label="E-mail"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your email!',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    name="password"
                    label="Password"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your password!',
                        },
                    ]}
                >
                    <Input.Password />
                </Form.Item>
                <Form.Item
                    name="phone"
                    label="Phone Number"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your phone number!',
                        },
                    ]}
                >
                    <Input maxLength={10} minLength={10} />
                </Form.Item>

                <Form.Item
                    name="gender"
                    label="Gender"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your gender!',
                        },
                    ]}
                >
                    <Radio.Group>
                        <Radio value="Male">Male</Radio>
                        <Radio value="Female">Female</Radio>
                    </Radio.Group>
                </Form.Item>

                <Form.Item
                    name="address"
                    label="Address"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your address!',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                {/* <Form.Item
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
                </Form.Item> */}
                <Form.Item >
                    <Button type="primary" htmlType="submit">
                        Register
                    </Button>
                    {/* <span style={{ marginLeft: "10px" }}>If registered , <NavLink to="/login"> Login </NavLink></span> */}
                </Form.Item>
            </Form>
        </center>

    )
}

export default Register
