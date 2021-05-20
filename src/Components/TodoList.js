import React, { Component } from 'react';
import {ListGroup, InputGroup} from "react-bootstrap"
import {FcEmptyTrash} from "react-icons/fc"

export default class TodoList extends Component {
    render() {
        return (
            <div>
                <ListGroup>
                {this.props.list.map((el, key) => 
                    <ListGroup.Item key={key} style={{display:"flex", justifyContent:"space-between"}}> 
                        <InputGroup.Prepend style={{marginRight:"10px"}}>
                            <InputGroup.Checkbox aria-label="Checkbox for following text input"/>
                        </InputGroup.Prepend>
                        {el} 
                        <FcEmptyTrash onClick={() => this.props.handleDelete(key)}>X</FcEmptyTrash>
                    </ListGroup.Item>
                )}
                </ListGroup>
            </div>
        )
    }
}
