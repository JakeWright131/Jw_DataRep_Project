import React from 'react';
import { Recipes } from './recipes';
import axios from 'axios';


export class Read extends React.Component {

    constructor(){
        super();

        this.ReloadData = this.ReloadData.bind(this);
    }
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

    ReloadData(){
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
                <Recipes recipes={this.state.recipes} ReloadData={this.ReloadData}></Recipes>
            </div>
        );
    }
}
