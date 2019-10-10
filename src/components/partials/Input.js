import React from 'react';
import {Form} from "react-bootstrap";

class Input extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            placeholder : this.props.placeholder,
            label : this.props.label,
            type: this.props.type,
            name: this.props.name,
            value: this.props.value,
            required: this.props.required,
            helper: this.props.helper
        }
    }

    render(){
        return(
            <Form.Group controlId={this.state.name + '_field'}>
                <Form.Label column={12}
                            className={'px-0'}>
                    {this.state.label}
                </Form.Label>
                <Form.Control placeholder={this.state.placeholder}
                              type={this.state.type}
                              value={this.state.value}
                              name={this.state.name}
                              required={!!(this.state.required)}/>
                <Form.Text className="text-muted">
                    {this.state.helper}
                </Form.Text>
            </Form.Group>
        );
    }
}

export default Input;
