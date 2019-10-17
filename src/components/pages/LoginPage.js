import React from "react";
import {Form, Icon, Input, Button, Checkbox, Card} from 'antd';
import NavigationLink from "../partials/NavigationLink";

class LoginForm extends React.Component {
    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
            }
        });
    };

    render() {
        const {getFieldDecorator} = this.props.form;
        return (
            <Card title="Login" bordered={true} className='card-container'>
                <Form onSubmit={this.handleSubmit} className="form-wrapper">
                    <Form.Item label="E-mail">
                        {getFieldDecorator('email', {
                            rules: [
                                {
                                    type: 'email',
                                    message: 'The input is not valid E-mail!',
                                },
                                {
                                    required: true,
                                    message: 'Please input your E-mail!',
                                },
                            ],
                        })(
                            <Input
                                prefix={<Icon type="mail" style={{color: 'rgba(0,0,0,.25)'}}/>}
                                placeholder=" E-mail"
                            />
                        )}
                    </Form.Item>
                    <Form.Item label="Password" hasFeedback>
                        {getFieldDecorator('password', {
                            rules: [
                                {
                                    required: true,
                                    message: 'Please input your password!',
                                }
                            ],
                        })(<Input.Password prefix={<Icon type="lock" style={{color: 'rgba(0,0,0,.25)'}}/>}
                                           placeholder=" Password"/>)}
                    </Form.Item>
                    <Form.Item>
                        {getFieldDecorator('remember', {
                            valuePropName: 'checked',
                            initialValue: true,
                        })(<Checkbox>Remember me</Checkbox>)}
                        <NavigationLink goesTo={'/forgot'} linkName={'Forgot Password'} customClass={'login-form-forgot'}/>
                        <Button type="primary" htmlType="submit" className="form-button">
                            Login
                        </Button>
                        Or <NavigationLink goesTo={'/register'} linkName={'register now!'}/>
                    </Form.Item>
                </Form>
            </Card>
        );
    }
}

const LoginPage = Form.create({name: 'login'})(LoginForm);

export default LoginPage;

