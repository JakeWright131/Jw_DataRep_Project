import React from 'react';
import Card from 'react-bootstrap/Card'

export class Footer extends React.Component {

    //renders the components onto the webpage

    //text is outputted onto the webpage

    render() {
        return (
            <div>
                <Card.Body>
                    <Card.Text>
                        <small><center>This is a student application</center></small>
                    </Card.Text>
                </Card.Body>
            </div>

        );
    }

}