import React, { Component } from 'react';
import {InputGroup, FormControl, Button} from "react-bootstrap"

export default class AddTodo extends Component {
    state={
        textInput: ""
    }
    
    handleInput = (e) => {
        this.setState({textInput: e.target.value})
    }


    render() {
        return (
            <div>
                <InputGroup className="mb-3">
                    <FormControl
                    placeholder="Recipient's username"
                    aria-label="Recipient's username"
                    aria-describedby="basic-addon2"
                    onChange={this.handleInput}
                    />
                    <InputGroup.Append>
                    <Button variant="secondary" onClick={() => this.props.handleAdd(this.state.textInput)}>Add</Button>
                    </InputGroup.Append>
                </InputGroup>
            </div>
        )
    }
}
