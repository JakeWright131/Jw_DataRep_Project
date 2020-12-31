import React from 'react';
import { RecipeItem } from './recipeItem';
import { Row, Col } from 'react-bootstrap';

//used map function to break up recipe information to display individual recipes

//passes single recipe data to recipe item for each movie

export class Recipes extends React.Component {

    render() {
        return (<Row>
            {this.props.recipes.map((recipe, _id) => (
                <Col sm={12} md={6} lg={3} key={recipe._id}>
                    <RecipeItem recipe={recipe} ReloadData={this.props.ReloadData} />
                </Col>
            ))}
        </Row>)


    }

}
