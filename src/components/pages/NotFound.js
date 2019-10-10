import React from 'react';
import {Container, Jumbotron} from "react-bootstrap";

function NotFound() {
    return(
        <Jumbotron fluid>
            <Container>
                <h1>404 Not Found</h1>
                <p>
                    This is not the page you are looking for 0_0
                </p>
            </Container>
        </Jumbotron>
    )
}

export default NotFound;
