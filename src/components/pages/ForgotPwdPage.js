import React from "react";
import {Form, Input, Button, Card, Icon} from 'antd';

class RegistrationForm extends React.Component {
    state = {
        confirmDirty: false
    };

    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFieldsAndScroll((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
            }
        });
    };

    render() {
        const {getFieldDecorator} = this.props.form;

        return (
            <Card title="Password Reset" bordered={true} className='card-container'>
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
                                prefix={<Icon type="user" style={{color: 'rgba(0,0,0,.25)'}}/>}
                                placeholder=" E-mail"
                            />
                        )}
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" htmlType="submit" className="form-button">
                            Send Reset Password Link
                        </Button>
                    </Form.Item>
                </Form>
            </Card>
        );
    }
}

const ForgotPwdPage = Form.create({name: 'pwdReset'})(RegistrationForm);

export default ForgotPwdPage;

