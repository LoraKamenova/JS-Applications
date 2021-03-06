import {logout as apiLogout} from '../data.js';
import {showInfo} from '../notification.js';
import {showError} from "../notification.js";

export default async function logout() {
    try{
        const result = await apiLogout();

        if(result.hasOwnProperty('errorData')) {
            const error = new Error();
            Object.assign(error, result);
            throw error;
        }

        this.app.userData.username ='';
        this.app.userData.userId = '';

        showInfo('Successfully logged out.');

        this.redirect('#/home');

    } catch (err) {
        console.log(err);
        showError(err.message);
    }
}