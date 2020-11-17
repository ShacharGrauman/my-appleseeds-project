import React, { useState, useEffect } from "react";

import Recipe from './Recipe';
import { getRecipes } from "../api/edamam";

function AllRecipes() {
  const [recipes, setRecipes] = useState([]);
  
  const getRecipesFromApi = async () => {
    const apiRecipes = await getRecipes(0, 5, "chicken");
    setRecipes(apiRecipes);
  };

  useEffect(() => {
    getRecipesFromApi();
  },[])

  if(!recipes.length){
    return 'Loading Recipes, Please Wait...'
  }

  return (    
        <>
        <div class="alert alert-warning" role="alert">
            All recipes
        </div>
        <div className="row">
            {
                recipes.map(recipe => (
                    <Recipe {...recipe} />                    
                ))
            }
        </div>
    </>
  );
}

export default AllRecipes;
