import  React  from 'react';
import { Recipes } from './recipes';


export class Read extends React.Component{

        state = {
            recipes: [
                {
                    "_id": "1",
                    "image": "https://images.pexels.com/photos/14737/pexels-photo.jpg?cs=srgb&dl=pexels-daniel-lindstrom-14737.jpg&fm=jpg",
                    "name": "Spaghetti Bolognese",
                    "ingredients": "2 onions, 1tbsp olive oil, 1 garlic clove,500g minced beef, chopped tomatoes, salt and ground black pepper, 350g spaghetti",
                    "serves": "4",
                    "prep": "10min",
                    "cooking": "40 min",
                    "steps": "Put the onion and oil in a large pan and fry over a fairly high heat for 3-4 mins. Add the garlic and mince and fry until they both brown and cook for another couple of mins.Stir in the tomatoes and seasoning. Bring to the boil, then reduce the heat, cover and simmer, stirring occasionally, for 30 mins.Meanwhile, cook the spaghetti in a large pan of boiling, salted water, according to packet instructions. Drain well, run hot water through it, put it back in the pan."
    
                }
            ]
        };

        render(){
            return(
            <div>
                <Recipes recipes={this.state.recipes}></Recipes>
            </div>
        );
    }
}

