import React, {useEffect, useState} from 'react';
import axios from 'axios';

import SectionRecipe from '../SectionPage/SectionRecipe/SectionRecipe';
import classes from '../SearchResults/SearchResults.module.css';

const SearchResult = (props) => {
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        const fetchRecipe = async () => {
            await axios.get('http://localhost:5000/search/' + props.match.params.name)
                .then(response => {
                    setRecipes(response.data)
                })
                .catch(error => console.log(error));
        }
        fetchRecipe();
    }, [props.match.params.name])

    const recipesList = recipes.map(recipe => {
        return <SectionRecipe key={recipe._id} name={recipe.name} img={"http://localhost:5000/" + recipe.image} id={recipe._id} />
    })

    return(
        <div> 
            <p>Searched: {props.match.params.name}</p>           
            <div className={classes.RecipeList}>
                {recipesList}
            </div>
        </div>     
    );
}

export default SearchResult;