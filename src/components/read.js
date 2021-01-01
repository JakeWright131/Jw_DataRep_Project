import React from 'react';
import { Recipes } from './recipes';
import axios from 'axios';
import Search from './search'


export class Read extends React.Component {


    //renders the components onto the webpage

    //text is outputted onto the webpage

    //imbedding recipes component in read component

    //passing data from read component using state object

    constructor() {
        super();

        this.ReloadData = this.ReloadData.bind(this);
    }
    state = {
        recipes: [],
        searchRecipe: ''
    };

    // event handler
    handleInput = e => {
        this.setState({ searchRecipe: e.target.value });
    }

    componentDidMount() {
        axios.get('http://localhost:4000/api/recipes')
            .then(
                (response) => {
                    this.setState({ recipes: response.data })
                })
            .catch((error) => {
                console.log(error)
            }
            );
    }

    //reloads data on webpage
    ReloadData() {
        axios.get('http://localhost:4000/api/recipes')
            .then(
                (response) => {
                    this.setState({ recipes: response.data })
                })
            .catch((error) => {
                console.log(error)
            }
            );
    }

    //displays recipes and their details out to the screen
    //search bar allows the user to filter through the recipes
    render() {
        let filteredRecipe = this.state.recipes.filter(recipe => {
            return recipe.name.toLowerCase().includes(this.state.searchRecipe.toLowerCase());
        });
        return (
            <div>
                <center><Search handleInput={this.handleInput} /></center>
                <Recipes recipes={this.state.recipes && filteredRecipe} ReloadData={this.ReloadData}></Recipes>
            </div>

        );

    }
}
