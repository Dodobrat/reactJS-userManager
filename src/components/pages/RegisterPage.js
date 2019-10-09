import React from "react";
import {Card, Container, Form} from "react-bootstrap";
import Input from "../partials/Input";
import SubmitBtn from "../partials/SubmitBtn";

class RegisterPage extends React.Component {
    render() {
        return (
            <div className="form-wrapper">
                <Container>
                    <div className="centered">
                        <Card>
                            <Card.Header>
                                <h4 className="mb-0">
                                    Register
                                </h4>
                            </Card.Header>
                            <Card.Body>
                                <Form>
                                    <Input name={'first_name'}
                                           placeholder={'Enter First Name'}
                                           label={'First Name'}
                                           type={'text'}
                                           required={'true'}
                                           helper={'Name must be at least 2 characters'}/>
                                    <Input name={'last_name'}
                                           placeholder={'Enter Last Name'}
                                           label={'Last Name'}
                                           type={'text'}
                                           required={'true'}
                                           helper={'Name must be at least 2 characters'}/>
                                    <Input name={'username'}
                                           placeholder={'Enter Username'}
                                           label={'Username'}
                                           type={'text'}
                                           required={'true'}/>
                                    <Input name={'email'}
                                           placeholder={'Enter E-mail address'}
                                           label={'E-mail'}
                                           type={'email'}
                                           required={'true'}/>
                                    <Input name={'password'}
                                           placeholder={'Enter Password'}
                                           label={'Password'}
                                           type={'password'}
                                           required={'true'}
                                           helper={'Must be at least 6 characters long'}/>
                                    <Input name={'password_confirm'}
                                           placeholder={'Confirm Password'}
                                           label={'Password Confirmation'}
                                           type={'password'}
                                           required={'true'}/>
                                    <Input name={'country'}
                                           placeholder={'Where are you from'}
                                           label={'Country'}
                                           type={'text'}
                                           required={'true'}/>
                                    <Input name={'birthday'}
                                           placeholder={'Write your Birth Day'}
                                           label={'Birth Date'}
                                           type={'date'}
                                           required={'true'}/>
                                    <Input name={'avatar'}
                                           placeholder={'Choose Photo'}
                                           label={'Profile Picture'}
                                           type={'file'}
                                           required={'true'}/>
                                    <SubmitBtn value={'Register'}
                                               variant={'primary'}/>
                                </Form>
                            </Card.Body>
                        </Card>
                    </div>
                </Container>
            </div>
        )
    }
}

export default RegisterPage;
