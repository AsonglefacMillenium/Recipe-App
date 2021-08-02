import React, { useEffect, useState } from 'react';
import Recipes from './Recipes';
import './App.css';

const App = () => {

  const App_ID = '05ab5852';
  const App_key = 'e780b7a81d6a1006f59d1416bef6b4bd';
  
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("")
  useEffect(() => {
 getRecipes();
  },[]);

  const getRecipes = async () =>{
    const response = await fetch(`https://api.edamam.com/search?q=chicken&app_id=${App_ID}&app_key=${App_key}&from=0&to=3&calories=591-722&health=alcohol-free`);
    const data = await response.json();
    setRecipes(data.hits);
    console.log(data.hits);
  };

  const updateSearch = e => {
    setSearch(e.target.value);
    console.log(search);
  };
  return(
    <div className="App">
      <form action="" className="main">
        <input type="text" className="search" value={search} onChange={updateSearch}/>
        <button className="btn-search" type="submit">Search</button>
      </form>
      {recipes.map(recipe => (
        <Recipes
        
         title={recipe.recipe.label} calories={recipe.recipe.calories} image = {recipe.recipe.image}/>
      ))}
    </div>
  );
}

export default App;
