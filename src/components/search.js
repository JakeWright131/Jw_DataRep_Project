// Imports React, Component
import React, { Component } from 'react';
// Imported Component from React Bootstrap
import { Form } from 'react-bootstrap';


export class Search extends Component {

//search component

    render() {
        return (
            <div style={{ width: "50%" }}>
                <Form.Group>
                    <Form.Control
                        type='text'
                        placeholder='Search recipes...'
                        onChange={this.props.handleInput}
                    />
                </Form.Group>
            </div>
        );
    }
}


export default Search;