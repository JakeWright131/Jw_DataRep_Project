import { render } from '@testing-library/react';
import React from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import ListGroupItem from 'react-bootstrap/ListGroupItem';

export class RecipeItem extends React.Component {

    render() {
        return (
            <div>

                <Card style={{ width: '20rem' }}>
                    <Card.Img variant="top" src={this.props.recipe.image} width="300" height="200" />
                    <Card.Body>
                        <Card.Title><h2><i>{this.props.recipe._id} : {this.props.recipe.name}</i></h2></Card.Title>
                        <Card.Text><h4><u>Steps</u></h4>{this.props.recipe.steps}
                        </Card.Text>
                    </Card.Body>
                    <ListGroup className="list-group-flush">
                        <ListGroupItem><h4><u>Ingredients</u></h4>{this.props.recipe.ingredients}</ListGroupItem>
                        <ListGroupItem><h4><u>Serves</u></h4>{this.props.recipe.serves} people</ListGroupItem>
                        <ListGroupItem><h4><u>Cooking Time</u></h4>{this.props.recipe.cooking}</ListGroupItem>
                    </ListGroup>
                </Card>

            </div>
        );
    }
}