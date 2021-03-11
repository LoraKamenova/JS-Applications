import {showError} from "./notification.js";
import API from "./api.js";

const endpoints = {
    MOVIES: 'data/movies',
    MOVIE_BY_ID: 'data/movies/'
};

const api = new API(
    'C468B493-9253-18B6-FF14-AF01321E0A00',
    'B920C78E-66E1-4A48-BCC8-EA9A42FCF87D',
);

export const login = api.login.bind(api);
export const register = api.register.bind(api);
export const logout = api.logout.bind(api);

export function checkResult(result) {
    if(result.hasOwnProperty('errorData')) {
        const error = new Error();
        Object.assign(error, result);
        throw error;
    }
}

//get all movies
export async function getAll() {
    return api.get(endpoints.MOVIES);
}

//create movie
export async function createMovie(movie) {
    return api.post(endpoints.MOVIES, movie);
}

//get movie by ID
export async function getMovieById(id) {
    return api.get(endpoints.MOVIE_BY_ID + id);
}

//edit movie by ID
export async function editMovie(id, movie) {
    return api.put(endpoints.MOVIE_BY_ID + id, movie);
}

//delete movie by ID
export async function deleteMovie(id) {
    return api.delete(endpoints.MOVIE_BY_ID + id);
}




