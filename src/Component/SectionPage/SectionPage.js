import React, {useState, useEffect} from 'react';
import axios from 'axios';

import SectionRecipe from './SectionRecipe/SectionRecipe';
import classes from './SectionPage.module.css';

const SectionPage = (props) => {
    const [recipes, setRecipes] = useState([]);
    const [recipeType, setRecipeType] = useState("");

    // fetch recipes and render only when path changes
    useEffect(() => {
        const fetchRecipe = async () => {
            await axios.get('http://localhost:5000' + props.location.pathname)
                .then(response => {
                    setRecipes(response.data)
                    console.log(props.location.pathname)
                })
                .catch(error => console.log(error));
        }
        fetchRecipe();
    }, [props.location.pathname])

    const recipesList = recipes.map(recipe => {
        return <SectionRecipe key={recipe._id} name={recipe.name} img={"http://localhost:5000/" + recipe.image} id={recipe._id} />
    })

    return(
        <div>
            {recipeType === "lunch" ? 
                <p className={classes.heading}>Lunch Recipes</p> : 
                <p className={classes.heading}>Dinner Recipes</p>}
            <div className={classes.RecipeList}>
                {recipesList}
            </div>
        </div>     
    );
};

export default SectionPage;