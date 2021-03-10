import {beginRequest, endRequest, showError} from "./notification.js";
import API from "./api.js";

const endpoints = {
    RECIPES: 'data/recipes',
    RECIPE_BY_ID: 'data/recipes/'
};

const api = new API(
    '412ACAF6-4158-696F-FF33-96DB935D2200',
    'C0CC51CA-FC1D-497B-ADFC-6877C6E4D963',
    beginRequest,
    endRequest);

export const login = api.login.bind(api);
export const register = api.register.bind(api);
export const logout = api.logout.bind(api);


//get all recipes
export async function getAll() {
    return api.get(endpoints.RECIPES);
}

//create (share) recipe
export async function createRecipe(recipe) {
    return api.post(endpoints.RECIPES, recipe);
}

//get recipe by ID
export async function getRecipeById(id) {
    return api.get(endpoints.RECIPE_BY_ID + id);
}

//edit recipe by ID
export async function editRecipe(id, recipe) {
    return api.put(endpoints.RECIPE_BY_ID + id, recipe);
}

//delete recipe by ID
export async function deleteRecipe(id) {
    return api.delete(endpoints.RECIPE_BY_ID + id);
}

//like recipe by ID
export async function likeRecipe(id) {
    //retrieve original object
    const recipe = await getRecipeById(id);
    //place update request
    return editRecipe(id, {likes: recipe.likes + 1});
}

export function checkResult(result) {
    if(result.hasOwnProperty('errorData')) {
        const error = new Error();
        Object.assign(error, result);
        throw error;
    }
}

export async function getMyRecipes(){
    const ownerId = sessionStorage.getItem('userId');

    return api.get(endpoints.RECIPES + `?where=ownerId%3D%27${ownerId}%27`);
}
