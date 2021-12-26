import React from "react";
import {Button, Form, Input, Checkbox} from "antd";
import ParticlesBg from 'particles-bg'

class Welcome extends React.Component {
    onFinish = (values) => {
        console.log('Success:', values);
        // react-router-dom跳转到首页
        // this.props.history.push('/home');
        // 跳转到首页
        window.location.href = '/home';
    };

    onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

render()
{
    return (
        <div>
            <div style={{
                width: "100%",
                height: "100vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
                backgroundColor: 'rgba(0,0,0,0~1)',
            }}>
                <Form
                    name="basic"
                    labelCol={{
                        span: 8,
                    }}
                    wrapperCol={{
                        span: 16,
                    }}
                    initialValues={{
                        remember: true,
                    }}
                    onFinish={this.onFinish}
                    onFinishFailed={this.onFinishFailed}
                    autoComplete="off"
                >
                    <Form.Item
                        label="账号"
                        name="username"
                        rules={[
                            {
                                required: true,
                                message: '请输入您的用户名！',
                            },
                        ]}
                    >
                        <Input/>
                    </Form.Item>

                    <Form.Item
                        label="密码"
                        name="password"
                        rules={[
                            {
                                required: true,
                                message: '请输入您的密码！',
                            },
                        ]}
                    >
                        <Input.Password/>
                    </Form.Item>

                    <Form.Item
                        name="remember"
                        valuePropName="checked"
                        wrapperCol={{
                            offset: 8,
                            span: 16,
                        }}
                    >
                        <Checkbox>记住账号</Checkbox>
                    </Form.Item>

                    <Form.Item
                        wrapperCol={{
                            offset: 8,
                            span: 16,
                        }}
                    >
                        <Button type="primary" htmlType="submit">
                            登陆
                        </Button>
                    </Form.Item>
                </Form>
            </div>
            <ParticlesBg type="circle" bg={true}/>
        </div>
    );
}
}

export default Welcome;