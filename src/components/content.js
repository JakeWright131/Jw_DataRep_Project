import React from 'react';
import Card from 'react-bootstrap/Card'

export class Content extends React.Component {

    render() {
        return (
            <div>
                <div class="container">
                    <Card>
                    <div class=" card text-white bg-success" >
                        <card-header> <h1><u>Welcome To <i><b>Recipe</b>Reminder </i></u></h1>
                            <h2>The current time is: <b>{new Date().toLocaleTimeString()}</b>.</h2><h3>Before you start cooking please take note of the following: </h3></card-header>
                        <Card.Img variant="top" src="https://images.creativemarket.com/0.1.0/ps/4853882/300/200/m2/fpnw/wm0/cover-.jpg?1533340292&s=59aac816e88c332607bdfb0cea01b822" height="600" />
                        <Card.Body>
                        <Card.Title><u>Importance of using fresh ingredients</u></Card.Title>
                            <Card.Text>
                            <h4>It is true that not always fresh ingredients are cheaper than processed ones, but in the long term, 
                                your health can be damaged by low-quality food and eventually, you will pay much more in medicines and/or treatments.
                                 And if you have a space that allows you to plant your veggies and fruits, you can save even more money!</h4>
                            </Card.Text>
                            
                        </Card.Body>
                        
                        </div>
                        
                    </Card>
                    
                    <br></br><br></br>
                    <Card>
                    <div class=" card text-white bg-success" >
                        <Card.Img variant="top" src="https://static.vecteezy.com/system/resources/thumbnails/000/534/411/original/Kitchen_utensils_vector_illustration.jpg" height="600" />
                        <Card.Body>
                            <Card.Title><u>Are all of your cooking utensils cleaned and sterilized?</u></Card.Title>
                            <Card.Text>
                                <h4>
                                    It's important to keep knives, wooden spoons, spatulas, tongs, and the like clean to help stop bacteria spreading to food.
                                    It's especially important to wash them thoroughly after using them with raw food, because they could spread bacteria to other food.
                                <br></br><br></br>
                                If you have a dishwasher, this is a very effective way to clean knives and other utensils because dishwashers can wash at a very high temperature, which kills bacteria. If you don't have a dishwasher, wash them thoroughly with hot water and washing-up liquid
                                </h4>{' '}
                            </Card.Text>
                        </Card.Body>
                        </div>
                    </Card>
                    <br></br><br></br>

                    <Card>
                    <div class=" card text-white bg-success" >   
                    
                        <Card.Img variant="top" src="https://i.pinimg.com/736x/72/7c/bd/727cbda59aa9bd0763ab1ed119e9080b.jpg" height="600" />
                        <Card.Body>
                        <Card.Title><u>Have you washed your hands?</u></Card.Title>
                            <Card.Text>
                                <h4>To prevent illnesses and food poisoning due to food contamination,
                                good personal hygiene must be observed at all times. Apart from that,
                                having good kitchen hygiene can greatly minimise the possibility of pest infestations
                            brought about by moisture and food particles.<br></br><br></br>
                            Maintaining the cleanliness in the area where food is being prepared,
                            constant hand washing and knowledge about the causes of food contamination,
                            as well as the dangers it poses to human health, should always be put in mind when preparing food.
                            </h4>
                            </Card.Text>
                        </Card.Body>
                        </div>
                    </Card>
                </div>
             </div>
           
            

        );


    }

}