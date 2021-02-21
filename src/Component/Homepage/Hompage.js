import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

import classes from './Homepage.module.css';
import Aux from '../../hoc/Auxiliry/Auxiliry';
import RecentlyAddedImage from '../FoodImages/RecentlyAddedImage/RecentlyAddedImage';
import SectionImage from '../FoodImages/SectionImage/SectionImage';
import WideImage from '../FoodImages/WideImage/WideImage';

const Homepage = () => {
    const [dinner, setDinner] = useState([]);
    const [lunch, setLunch] = useState([]);
    const [recentlyAdded, setRecentlyAdded] = useState([]);

    // fetch all recently added recipes when screen loads
    useEffect(() => {
        const fetchRecipe = async () => {
            await axios.get('http://localhost:5000/')
                .then(response => {
                    setDinner(response.data.dinner);
                    setLunch(response.data.lunch);
                    setRecentlyAdded(response.data.recentlyAdded);
                })
                .catch(error => console.log(error));
        }
        fetchRecipe();
    },[])

    // go through each state and map each of the sections in the homepage
    const recentlyAddRecipes = recentlyAdded.map(recipe => {
        return <RecentlyAddedImage key={recipe._id} name={recipe.name} img={"http://localhost:5000/" + recipe.image} id={recipe._id} />
    })

    const dinnerRecipes = dinner.map(recipe => {
        return <SectionImage key={recipe._id} name={recipe.name} caption={recipe.description} img={"http://localhost:5000/" + recipe.image} id={recipe._id} />
    })

    const lunchRecipes = lunch.map(recipe => {
        return <SectionImage key={recipe._id} name={recipe.name} caption={recipe.description} img={"http://localhost:5000/" + recipe.image} id={recipe._id} />
    })

    // const prepRecipes = recentlyAdded.map(recipe => {
    //     return <WideImage key={recipe.key} name={recipe.name} img={recipe.image} />
    // })
        
    return (
        <Aux>
             <p className={classes.Category}>Recently Added</p>
            <div className={classes.RecentlyAddedImages}>
                {recentlyAddRecipes}
            </div>
            <div className={classes.Combine}>
                <p className={classes.Category}>Dinner</p>
                <Link className={classes.ViewMore} to="/Dinner">View More...</Link>
            </div>
            <div className={classes.SectionImages}>
                {dinnerRecipes}
            </div>
            {/* {prepRecipes} */}
            <div className={classes.Combine}>
                <p className={classes.Category}>Lunch</p>
                <Link className={classes.ViewMore} to="/Lunch">View More...</Link>
            </div>
            <div className={classes.SectionImages}>
                {lunchRecipes}
            </div> 
        </Aux>
    );
}

// class Homepage extends Component {
//     state = {
//         recipes: [
//             {
//                 key: 1,
//                 name: "Chocolate Chip Cookies",
//                 description: "Large cookies made with big chocolate chunks",
//                 image: cookies,
//                 type: "Dinner"
//             },
//             {
//                 key: 2,
//                 name: "Halloumi Gyros",
//                 description: "Gyros with halloumi and tatziki dressing",
//                 image: gyros,
//                 type: "Lunch"
//             },
//             {
//                 key: 3,
//                 name: "Prawn Chow Mein",
//                 description: "Chow Mein with prawns and mixed vegetables",
//                 image: noodles,
//                 type: "Dinner"
//             },
//             {
//                 key: 4,
//                 name: "Meal Prep 1",
//                 description: "Lunch and Dinner Prep",
//                 image: salad,
//                 type: "Prep"
//             },
//             {
//                 key: 5,
//                 name: "Halloumi Salad",
//                 description: "Halloumi salad with tatziki dressing",
//                 image: salad,
//                 type: "Lunch"
//             }
//         ]
//     }

//     render() {
//         const recentlyAddRecipes = this.state.recipes.slice(0,4)
//             .map(recipe => {
//                     return <RecentlyAddedImage key={recipe.key} name={recipe.name} img={recipe.image} />
//             })

//         const findDinnerRecipes = this.state.recipes.filter(recipe => recipe.type === 'Dinner');
//         const findLunchRecipes = this.state.recipes.filter(recipe => recipe.type === 'Lunch');
//         const findPrepRecipe = this.state.recipes.filter(recipe => recipe.type === 'Prep');

//         const dinnerRecipes = findDinnerRecipes.slice(0,2).map(recipe => {
//             return <SectionImage key={recipe.key} name={recipe.name} caption={recipe.description} img={recipe.image} />
//         })

//         const lunchRecipes = findLunchRecipes.slice(0,2).map(recipe => {
//             return <SectionImage key={recipe.key} name={recipe.name} caption={recipe.description} img={recipe.image} />
//         })

//         const prepRecipes = findPrepRecipe.slice(0,1).map(recipe => {
//             return <WideImage key={recipe.key} name={recipe.name} img={recipe.image} />
//         })

//         return (
//             <Aux>
//                 <p className={classes.Category}>Recently Added</p>
//                 <div className={classes.RecentlyAddedImages}>
//                     {recentlyAddRecipes}
//                 </div>
//                 <div className={classes.Combine}>
//                     <p className={classes.Category}>Dinner</p>
//                     <p className={classes.ViewMore}>View More...</p>
//                 </div>
//                 <div className={classes.SectionImages}>
//                     {dinnerRecipes}
//                 </div>
//                 {prepRecipes}
//                 <div className={classes.Combine}>
//                     <p className={classes.Category}>Lunch</p>
//                     <p className={classes.ViewMore}>View More...</p>
//                 </div>
//                 <div className={classes.SectionImages}>
//                     {lunchRecipes}
//                 </div>
//             </Aux>
//         );
//     }
// };

export default Homepage;