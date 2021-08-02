import React from "react";
import style from './recipe.module.css';

const Recipes = ({title, calories, ingredients, image}) =>{
    return(
        <div className={style.recipe}>
            <h1>{title}</h1>
            <h3>Calories: {calories}</h3>
            <h3>Ingredients</h3>
            <ol>
                {ingredients.map(ingredient =>(
                    <li>{ingredient.text}</li>
                ))}
            </ol>
            <img src={image} alt="" className={style.image} />
        </div>
    );
}

export default Recipes;