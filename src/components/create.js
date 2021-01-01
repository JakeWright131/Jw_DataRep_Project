import React from 'react';
import axios from 'axios';



export class Create extends React.Component {

    //renders the components onto the webpage

    //text is outputted onto the webpage

    constructor() {
        super();

        this.onSubmit = this.onSubmit.bind(this);
        this.onChange_id = this.onChange_id.bind(this);
        this.onChangename = this.onChangename.bind(this);
        this.onChangesteps = this.onChangesteps.bind(this);
        this.onChangeimage = this.onChangeimage.bind(this);
        this.onChangeingredients = this.onChangeingredients.bind(this);
        this.onChangeserves = this.onChangeserves.bind(this);
        this.onChangecooking = this.onChangecooking.bind(this);

        this.state = {
            _id: '',
            image: '',
            name: '',
            ingredients: '',
            serves: '',
            prep: '',
            cooking: '',
            steps: ''

        }
    }

    //Targets name value to change
    onChangename(e) {
        this.setState({
            name: e.target.value
        });
    }

    //Targets name value to change
    onChange_id(e) {
        this.setState({
            _id: e.target.value
        });
    }

    //Targets step value to change    
    onChangesteps(e) {
        this.setState({
            steps: e.target.value
        });
    }

    //Targets image value to change
    onChangeimage(e) {
        this.setState({
            image: e.target.value
        });
    }

    //Targets ingredients value to change
    onChangeingredients(e) {
        this.setState({
            ingredients: e.target.value
        });
    }

    //Targets serves value to change
    onChangeserves(e) {
        this.setState({
            serves: e.target.value
        });
    }

    //Targets cooking value to change
    onChangecooking(e) {
        this.setState({
            cooking: e.target.value
        });
    }

    //On submit the values added will display in an alert popup
    onSubmit(e) {
        e.preventDefault();
        alert("Recipe: " + this.state.name + " Successfully Added");

        const newRecipe = {
            image: this.state.image,
            name: this.state.name,
            _id: this.state._id,
            steps: this.state.steps,
            ingredients: this.state.ingredients,
            serves: this.state.serves,
            cooking: this.state.cooking
        }
        axios.post('http://localhost:4000/api/recipes', newRecipe)
            .then((res) => {
                console.log(res);
            })
            .catch((err) => {
                console.log(err)
            });
    }

    //form displays inserted text into database

    render() {
        return (

            <div class="container">
                <div className="cardStyle"   >
                    <div className='App'>
                        <form onSubmit={this.onSubmit}>
                            <div className='form-group' >
                                <label>Add Food Image: </label>
                                <textarea type='text'
                                    className='form-control'
                                    value={this.state.image}
                                    onChange={this.onChangeimage}></textarea>
                            </div>


                            <div className="form-group">
                                <label>Add Recipe Name: </label>
                                <input type='text'
                                    className='form-control'
                                    value={this.state.name}
                                    onChange={this.onChangename}></input>
                            </div>

                            <div className="form-group">
                                <label>Add Recipe id: </label>
                                <input type='text'
                                    className='form-control'
                                    value={this.state._id}
                                    onChange={this.onChange_id}></input>
                            </div>

                            <div className='form-group'>
                                <label>Add Cooking Steps: </label>
                                <textarea type='text'
                                    className='form-control'
                                    value={this.state.steps}
                                    onChange={this.onChangesteps}></textarea>
                            </div>

                            <div className='form-group'>
                                <label>Add Ingredients: </label>
                                <textarea type='text'
                                    className='form-control'
                                    value={this.state.ingredients}
                                    onChange={this.onChangeingredients}></textarea>
                            </div>


                            <div className="form-group">
                                <label>Add Serve Amount: </label>
                                <input type='text'
                                    className='form-control'
                                    value={this.state.serves}
                                    onChange={this.onChangeserves}></input>
                            </div>

                            <div className="form-group">
                                <label>Add Cooking Duration: </label>
                                <input type='text'
                                    className='form-control'
                                    value={this.state.cooking}
                                    onChange={this.onChangecooking}></input>
                            </div>



                            <input type='submit' value='Add Recipe' className='btn btn-success' ></input>

                        </form>
                        <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>

                    </div>

                </div>

            </div>


        );

    }

}