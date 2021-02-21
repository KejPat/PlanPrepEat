import axios from 'axios';
import React, {useState, useEffect} from 'react';

import classes from './RecipePage.module.css';

const RecipePage = (props) => {
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [uploadImage, setUploadImage] = useState("");
    const [ingredientsList, setIngredientsList] = useState([{amount: "", ingredient: ""}])
    const [instructionsList, setInstructionsList] = useState([{instruction: ""}]);

    useEffect(() => {
        const fetchRecipe = async () => {
            await axios.get('http://localhost:5000/recipe/' + props.match.params.id)
                .then(response => {
                    console.log(response.data);
                    setName(response.data.name);
                    setDescription(response.data.description);
                    setUploadImage("http://localhost:5000/" + response.data.image);
                    setIngredientsList(response.data.ingredients);
                    setInstructionsList(response.data.instructions);
                })
                .catch(error => console.log(error));
        }
        fetchRecipe();
    },[props.match.params.id])

    return (
        <div>
            <div className={classes.Container}>
                <p className={classes.Title}>{name}</p>
                <p className={classes.Description}>{description}</p>
                <img className={classes.Image} src={uploadImage} alt="Recipe" />
            </div>
            <div className={classes.ListContainer}>
                <ul className={classes.IngList}>
                    {ingredientsList.map(items => {
                        return (
                            <li className={classes.IngItems}>{items.amount} {items.ingredient}</li>
                        )
                    })}
                </ul>
                <ol className={classes.InsList}>
                    {instructionsList.map((items, index) => {
                        return (
                            <li className={classes.InsItems}>{items.instruction}</li>
                        )
                    })}
                </ol>
            </div>
        </div>
    )
}

export default RecipePage;