import { render } from '@testing-library/react';
import React from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import ListGroupItem from 'react-bootstrap/ListGroupItem';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import {Link} from 'react-router-dom';

export class RecipeItem extends React.Component {

    constructor(){
        super();

        this.DeleteRecipe = this.DeleteRecipe.bind(this);
    }

    DeleteRecipe(e){
        e.preventDefault();
        console.log("Delete: "+this.props.recipe._id);

        axios.delete("http://localhost:4000/api/recipes/" +this.props.recipe._id)
        .then(()=>{
            this.props.ReloadData();
        })
        .catch();
    }

    render() {
        return (
            <div>
                <div class="container">
  <div class="row">
    <div class="col-sm">
                <Card style={{ width: '20rem' }}>
                <div class="card border-success mb-3 card text-white bg-success mb-3" >
                    <Card.Img variant="top" src={this.props.recipe.image} width="300" height="200" />
                    <Card.Body>
                        <Card.Title><h2><i><u><b>{this.props.recipe._id} : {this.props.recipe.name}</b></u></i></h2></Card.Title>
                         <h4><u><b>Steps: </b></u></h4><p>{this.props.recipe.steps}</p>
                        <h4><u><b>Ingredients: </b></u></h4><p>{this.props.recipe.ingredients}</p>
                        <h4><u><b>Serves: </b></u></h4><p>{this.props.recipe.serves}</p>
                        <h4><u><b>Cooking Time: </b></u></h4><p>{this.props.recipe.cooking}</p>
                    </Card.Body>
                    <Button variant='danger' onClick={this.DeleteRecipe}>Delete</Button>
                    <Link to={"/edit/"+ this.props.recipe._id} className = "btn btn-warning">Edit</Link></div>
                </Card>

            </div>
            </div>
            </div>
            </div>
        );
    }
}