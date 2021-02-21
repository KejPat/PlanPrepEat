import React, {useState} from 'react';
import axios from 'axios';

import classes from './NewPost.module.css';

const NewPost = (props) => {
    const [name, setName] = useState("");
    const [type, setType] = useState("");
    const [description, setDescription] = useState("");
    const [uploadImage, setUploadImage] = useState(null);
    const [ingredientsList, setIngredientsList] = useState([{amount: "", ingredient: ""}])
    const [instructionsList, setInstructionsList] = useState([{instruction: ""}]);

    console.log(props);

    const handleNameInputChange = (event) => {
        setName(event.target.value)
    }

    const handleTypeChange = (event) => {
        setType(event.target.value);
    }

    const handleDescriptionInputChange = (event) => {
        setDescription(event.target.value);
    }

    const handleImageUpload = (event) => {
        console.log(event.target.files[0]);
        setUploadImage(event.target.files[0]);
    }

    const handleIngredientsListChange = (index, event) => {
        const ing = [...ingredientsList];
        ing[index][event.target.name] = event.target.value;
        setIngredientsList(ing);
    }

    const addIngredientField = () => {
        setIngredientsList([...ingredientsList, {amount: "", ingredient: ""}])
    }

    const removeIngredientField = (index) => {
        const ing = [...ingredientsList];
        ing.splice(index, 1);
        setIngredientsList(ing);
    }

    const handleInstructionsListChange = (index, event) => {
        const instruct = [...instructionsList];
        instruct[index][event.target.name] = event.target.value;
        setInstructionsList(instruct);
    }

    const addInstructionsField = () => {
        setInstructionsList([...instructionsList, {instruction: ""}])
    }

    const removeInstructionsField = (index) => {
        const instruct = [...instructionsList];
        instruct.splice(index, 1);
        setInstructionsList(instruct);
    }

    const newPostHandler = (event) => {
        event.preventDefault();
        const data = new FormData();
        data.append('name', name);
        data.append('type', type);
        data.append('description', description);
        data.append('image', uploadImage);
        data.append('ingredients', JSON.stringify(ingredientsList));
        data.append('instructions', JSON.stringify(instructionsList));

        axios.post('http://localhost:5000/newpost/', data)
            .then(res => {
                props.history.push({pathname: '/recipe/' + res.data});
            })
            .catch(err => {
                console.log(err);
            });
    }

    return(
        <form className={classes.Form} onSubmit={newPostHandler}> 
            <div className={classes.Container}>
                <p>Recipe Name:</p>
                <input
                    className={classes.WideTextInput}
                    type="text"
                    placeholder="Recipe Name"
                    name="name"
                    value={name}
                    onChange={handleNameInputChange} />
                <p>Type of Recipe:</p>
                <select 
                    name="type" 
                    value={type}
                    onChange={handleTypeChange}>
                    <option value="empty">Select Type</option>
                    <option value="Dinner">Dinner</option>
                    <option value="Lunch">Lunch</option>
                    <option value="MealPrep">Meal Prep</option>
                </select>
                <p>Recipe Description<span>(max 100 characters)</span>:</p>
                <input
                    className={classes.WideTextInput}
                    type="text"
                    placeholder="Description"
                    name="name" 
                    value={description}
                    maxLength="100"
                    onChange={handleDescriptionInputChange}/>
                <p>Upload Image</p>
                <input 
                    type="file"
                    onChange={handleImageUpload} />
                <p>Add Ingredients:</p>    
                { ingredientsList.map((ingredientItem, index) => (
                    <div key={index}>
                        <input 
                            className={classes.AmountTextInput}
                            type="text"
                            placeholder="Amount"
                            name="amount"
                            value={ingredientItem.amount}
                            onChange={event => handleIngredientsListChange(index, event)}/> 
                        <input 
                            className={classes.IngredientTextInput}
                            type="text"
                            placeholder="Ingredient"
                            name="ingredient"
                            value={ingredientItem.ingredient}
                            onChange={event => handleIngredientsListChange(index, event)}/>   
                        <button type="button" onClick={() => removeIngredientField(index)}>Remove</button>      
                    </div>
                ))}      
                <button type="button" onClick={addIngredientField}>Add</button>  
                <p>Add Instructions:</p>
                { instructionsList.map((instructionItem, index) => (
                    <div key={index}>
                        {index+1}. 
                        <textarea 
                            className={classes.InstructionTextInput}
                            placeholder="Add Instruction"
                            name="instruction"
                            value={instructionItem.instruction}
                            onChange={event => handleInstructionsListChange(index, event)}/>
                        <button type="button" onClick={() => removeInstructionsField(index)}>Remove</button>      
                    </div>
                ))} 
                <button type="button" onClick={addInstructionsField}>Add</button>
                <div className={classes.SubmitContainer}>
                    <button className={classes.SubmitBtn} type="submit" encType="multipart/form-data">Submit</button>
                </div>
            </div>
        </form>
    );
};

export default NewPost;