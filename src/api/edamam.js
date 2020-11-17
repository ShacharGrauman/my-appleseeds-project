import axios from 'axios';

const keys = {
    appId: '',
    appKey: ''
};

const getRecipes = async (from, to, query) => {
    const {data} = await axios.get(`https://api.edamam.com/search?app_id=${keys.appId}&app_key=${keys.appKey}&from=${from}&to=${to}&q=${query}`);
    return data.hits.map(({recipe: {label, url, image, ingredientLines, calories, totalTime}}) => ({
        label, 
        url, 
        image, 
        ingredientLines, 
        calories, 
        totalTime
    }));
}

const getRecipe = async id => {
    //...
}

export {
    getRecipes,
    getRecipe
};