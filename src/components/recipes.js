import  React  from 'react';
import { RecipeItem } from './recipeItem';

export class Recipes extends React.Component{

    render(){
        return this.props.recipes.map( (recipe)=>{
            return <RecipeItem recipe={recipe}></RecipeItem>
        });
            
    }

}
