import { render } from '@testing-library/react';
import React from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import ListGroupItem from 'react-bootstrap/ListGroupItem';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import { Link } from 'react-router-dom';

//renders the components onto the webpage

//outputting recipe data out to the screen

//imported card element from bootstrap

//imported link element to card

//imported bootstrap button

//created delete button

export class RecipeItem extends React.Component {

    constructor() {
        super();

        this.DeleteRecipe = this.DeleteRecipe.bind(this);
    }

    //delete recipe function
    //prevent default prevents user from deleting the entire database
    DeleteRecipe(e) {
        e.preventDefault();
        console.log("Delete: " + this.props.recipe._id);

        axios.delete("http://localhost:4000/api/recipes/" + this.props.recipe._id)
            .then(() => {
                this.props.ReloadData();
            })
            .catch();
    }

    render() {
        return (
            <div class="container-fluid content-row">

                <Card style={{ width: '23rem' }}>
                    <div className="cardStyle" bg-success >
                        <Card.Body>
                            <Card.Img variant="top" src={this.props.recipe.image} width="200" height="200" />
                            <Card.Title><h2><i><u><b>{this.props.recipe._id} : {this.props.recipe.name}</b></u></i></h2></Card.Title>
                            <h4><u><b>Steps: </b></u></h4><p>{this.props.recipe.steps}</p>
                            <h4><u><b>Ingredients: </b></u></h4><p>{this.props.recipe.ingredients}</p>
                            <h4><u><b>Serves: </b></u></h4><p>{this.props.recipe.serves}</p>
                            <h4><u><b>Cooking Time: </b></u></h4><p>{this.props.recipe.cooking}</p>
                        </Card.Body>
                        <Link to={"/edit/" + this.props.recipe._id}><Button variant='warning ' size="lg" block>Edit</Button></Link>
                        <Button variant='danger' size="lg" block onClick={this.DeleteRecipe}>Delete</Button>  </div>
                </Card>

            </div>




        );
    }
}