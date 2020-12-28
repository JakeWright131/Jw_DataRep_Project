import React from 'react';
import { Recipes } from './recipes';
import axios from 'axios';


export class Read extends React.Component {

    state = {
        recipes: [

        ]
    };

    componentDidMount() {
        axios.get('http://localhost:4000/api/recipes')
            .then(
                (response) => {
                    this.setState({ recipes: response.data })
                })
            .catch((error) => {
                 console.log(error) }
            );
    }

    render() {
        return (
            <div>
                <Recipes recipes={this.state.recipes}></Recipes>
            </div>
        );
    }
}

