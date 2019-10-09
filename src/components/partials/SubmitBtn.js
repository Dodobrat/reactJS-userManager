import React from 'react';
import {Button} from "react-bootstrap";

class SubmitBtn extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            variant : this.props.variant,
            value: this.props.value
        }
    }

    render(){
        return(
            <div>
                <hr/>
                <Button variant={this.state.variant}
                        type="submit">
                    {this.state.value}
                </Button>
            </div>
        );
    }
}

export default SubmitBtn;
