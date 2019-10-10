import React from "react";
import {Card, Container, Form} from "react-bootstrap";
import Input from "../partials/Input";
import SubmitBtn from "../partials/SubmitBtn";
import NavigationLink from "../layouts/NavigationLink";

class LoginPage extends React.Component{
    render() {
        return(
            <div className="form-wrapper">
                <Container>
                    <div className="centered">
                        <Card>
                            <Card.Header>
                                <h4 className="mb-0">
                                    Login
                                </h4>
                            </Card.Header>
                            <Card.Body>
                                <Form>
                                    <Input name={'email'}
                                           placeholder={'Enter E-mail address'}
                                           label={'E-mail'}
                                           type={'email'}
                                           required={'true'}/>
                                    <Input name={'password'}
                                           placeholder={'Enter Password'}
                                           label={'Password'}
                                           type={'password'}
                                           required={'true'}/>
                                    <SubmitBtn value={'Login'}
                                               variant={'primary'}/>
                                </Form>
                            </Card.Body>
                            <Card.Footer>
                                <NavigationLink goesTo={'/forgot'} linkName={'Forgot Password'} customClass={'login-link'}/>
                            </Card.Footer>
                        </Card>
                    </div>
                </Container>
            </div>
        )
    }
}

export default LoginPage;
