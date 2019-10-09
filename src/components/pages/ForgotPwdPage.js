import React from "react";
import {Card, Container, Form} from "react-bootstrap";
import Input from "../partials/Input";
import SubmitBtn from "../partials/SubmitBtn";

class ForgotPwdPage extends React.Component{
    render() {
        return(
            <div className="form-wrapper">
                <Container>
                    <div className="centered">
                        <Card>
                            <Card.Header>
                                <h4 className="mb-0">
                                    Reset Your Password
                                </h4>
                            </Card.Header>
                            <Card.Body>
                                <Form>
                                    <Input name={'email'}
                                           placeholder={'Enter E-mail address'}
                                           label={'E-mail'}
                                           type={'email'}
                                           required={'true'}/>
                                    <SubmitBtn value={'Send Password Reset Link'}
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

export default ForgotPwdPage;
