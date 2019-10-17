import React from "react";
import {Form, Input, Checkbox, Button, Card, Icon, Alert} from 'antd';
import NavigationLink from "../partials/NavigationLink";

class RegistrationForm extends React.Component {
    state = {
        confirmDirty: false,
        addedSuccessfully: false,
        showSuccess: false,
        showError: false,
        errorCode: 400,
        responseStatus: "nothing",
        errorMessage: ""
    };

    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFieldsAndScroll((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
                fetch('http://localhost:3001/api/v1/cw/user/add', {
                    method: 'POST',
                    headers: {
                        'Accept': 'application/json',
                        'Content-type': 'application/json',
                    },
                    body: JSON.stringify({values})
                }).then(res => {
                    if (res.ok) {
                        this.setState({
                            addedSuccessfully: true
                        })
                    } else {
                        this.setState({
                            addedSuccessfully: false,
                            errorCode: res.status
                        })
                    }
                    return res.json()
                }).then(data => this.checkResponse(data))
            }
        });
    };

    handleEmail = () => {
        this.setState({responseStatus: "nothing"})
    };

    handleConfirmBlur = e => {
        const {value} = e.target;
        this.setState({confirmDirty: this.state.confirmDirty || !!value});
    };

    compareToFirstPassword = (rule, value, callback) => {
        const {form} = this.props;
        if (value && value !== form.getFieldValue('password')) {
            callback('Two passwords that you enter is inconsistent!');
        } else {
            callback();
        }
    };

    validateToNextPassword = (rule, value, callback) => {
        const {form} = this.props;
        if (value && this.state.confirmDirty) {
            form.validateFields(['confirm'], {force: true});
        }
        callback();
    };

    checkResponse = (data) => {
        if (this.state.addedSuccessfully) {
            this.props.form.resetFields();
            this.setState({
                showSuccess: true,
                showError: false
            });
        } else {
            this.setState({
                errorMessage: data.message,
                showSuccess: false,
                showError: true,
                responseStatus: "error"
            });
        }
    };

    render() {
        const {getFieldDecorator} = this.props.form;

        return (
            <Card title="Register" bordered={true} className='card-container'>
                <Form onSubmit={this.handleSubmit} className='form-wrapper'>
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
                                onChange={this.handleEmail}
                            />
                        )}
                    </Form.Item>
                    <Form.Item label="Password" hasFeedback>
                        {getFieldDecorator('password', {
                            rules: [
                                {
                                    required: true,
                                    message: 'Please input your password!',
                                },
                                {
                                    min: 6,
                                    message: 'password should be at least 6 characters long!',
                                },
                                {
                                    validator: this.validateToNextPassword,
                                },
                            ],
                        })(<Input.Password prefix={<Icon type="lock" style={{color: 'rgba(0,0,0,.25)'}}/>}
                                           placeholder=" Password"/>)}
                    </Form.Item>
                    <Form.Item label="Confirm Password" hasFeedback>
                        {getFieldDecorator('confirm', {
                            rules: [
                                {
                                    required: true,
                                    message: 'Please confirm your password!',
                                },
                                {
                                    validator: this.compareToFirstPassword,
                                },
                            ],
                        })(<Input.Password prefix={<Icon type="lock" style={{color: 'rgba(0,0,0,.25)'}}/>}
                                           placeholder=" Confirm Password" onBlur={this.handleConfirmBlur}/>)}
                    </Form.Item>

                    <Form.Item>
                        {getFieldDecorator('agreement', {
                            rules: [
                                {
                                    required: true,
                                    message: 'Please read the agreement!',
                                }
                            ],
                            valuePropName: 'checked',
                        })(
                            <Checkbox>
                                I have read the <NavigationLink goesTo={'/terms'} linkName={'agreement'}/>
                            </Checkbox>,
                        )}
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" htmlType="submit" className="form-button">
                            Register
                        </Button>
                    </Form.Item>
                    {this.state.showSuccess ? <Alert message="account created successfully" type="success" /> :null}
                    {this.state.showError ? <Alert message={this.state.errorMessage} type="error" /> :null}
                </Form>
            </Card>
        );
    }
}

const RegisterPage = Form.create({name: 'register'})(RegistrationForm);

export default RegisterPage;

