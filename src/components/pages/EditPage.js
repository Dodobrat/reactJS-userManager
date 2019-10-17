import React from "react";
import {Alert, Button, Card, DatePicker, Form, Icon, Input, message, Switch, Upload} from "antd";

const {TextArea} = Input;

function getBase64(img, callback) {
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result));
    reader.readAsDataURL(img);
}

function beforeUpload(file) {
    const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
    if (!isJpgOrPng) {
        message.error('You can only upload JPG/PNG file!');
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
        message.error('Image must smaller than 2MB!');
    }
    return isJpgOrPng && isLt2M;
}

function onDatePick(date, dateString) {
    console.log(date, dateString);
}

function onSwitch(checked) {
    console.log(`switch to ${checked}`);
}

class EditForm extends React.Component{
    state = {
        confirmDirty: false,
        addedSuccessfully: false,
        showSuccess: false,
        showError: false,
        loading: false,
        errorCode: 400,
        responseStatus: "nothing",
        errorMessage: ""
    };

    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFieldsAndScroll((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
                fetch('http://localhost:3001/api/v1/cw/user/edit', {
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

    handleChange = info => {
        if (info.file.status === 'uploading') {
            this.setState({ loading: true });
            return;
        }
        if (info.file.status === 'done') {
            // Get this url from response in real world.
            getBase64(info.file.originFileObj, imageUrl =>
                this.setState({
                    imageUrl,
                    loading: false,
                }),
            );
        }
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

        const uploadButton = (
            <div>
                <Icon type={this.state.loading ? 'loading' : 'plus'} />
                <div className="ant-upload-text">Upload</div>
            </div>
        );
        const { imageUrl } = this.state;

        return (
            <Card title="Edit Profile" bordered={true} className='card-container'>
                <Form onSubmit={this.handleSubmit} className='form-wrapper'>
                    <Form.Item label="First Name">
                        {getFieldDecorator('first_name', {
                            rules: [
                                {
                                    required: false
                                },
                            ],
                        })(
                            <Input
                                prefix={<Icon type="user" style={{color: 'rgba(0,0,0,.25)'}}/>}
                                placeholder=" First Name"
                            />
                        )}
                    </Form.Item>
                    <Form.Item label="Last Name">
                        {getFieldDecorator('last_name', {
                            rules: [
                                {
                                    required: false
                                },
                            ],
                        })(
                            <Input
                                prefix={<Icon type="user" style={{color: 'rgba(0,0,0,.25)'}}/>}
                                placeholder=" Last Name"
                            />
                        )}
                    </Form.Item>
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
                    <Form.Item label="Username">
                        {getFieldDecorator('username', {
                            rules: [
                                {
                                    required: false
                                },
                            ],
                        })(
                            <Input
                                prefix={<Icon type="user" style={{color: 'rgba(0,0,0,.25)'}}/>}
                                placeholder=" Username"
                            />
                        )}
                    </Form.Item>
                    <Form.Item label="Birth Day">
                        <DatePicker onChange={onDatePick} style={{ width: '100%'}}/>
                    </Form.Item>
                    <Form.Item label="Nationality">
                        <Input prefix={<Icon type="flag" style={{color: 'rgba(0,0,0,.25)'}}/>} placeholder=" Nationality"/>
                    </Form.Item>
                    <Form.Item label="Avatar">
                        <Upload
                            name="avatar"
                            listType="picture-card"
                            className="avatar-uploader"
                            showUploadList={false}
                            action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                            beforeUpload={beforeUpload}
                            onChange={this.handleChange}
                        >
                            {imageUrl ? <img src={imageUrl} alt="avatar" style={{ width: '100%' }} /> : uploadButton}
                        </Upload>
                    </Form.Item>
                    <Form.Item label="About Me">
                        <TextArea
                            placeholder="Write some text that describes you :)"
                            autoSize={{ minRows: 4, maxRows: 6 }}
                        />
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
                    <Form.Item label="Active account">
                        <Switch defaultChecked onChange={onSwitch}/>
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" htmlType="submit" className="form-button">
                            Save Changes
                        </Button>
                        <Button type="danger" className="form-button">
                            Cancel
                        </Button>
                    </Form.Item>
                    {this.state.showSuccess ? <Alert message="account created successfully" type="success" /> :null}
                    {this.state.showError ? <Alert message={this.state.errorMessage} type="error" /> :null}
                </Form>
            </Card>
        );
    }
}

const EditPage = Form.create({name: 'edit'})(EditForm);

export default EditPage
