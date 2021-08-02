import React from "react";

const Recipes = ({title, calories, image}) =>{
    return(
        <div className="recipe">
            <h1>{title}</h1>
            <h3>{calories}</h3>
            <img src={image} alt="" />
        </div>
    );
}

export default Recipes;