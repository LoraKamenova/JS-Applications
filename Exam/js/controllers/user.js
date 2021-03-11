import {showError, showInfo} from "../notification.js";
import {register, login, checkResult, logout as apiLogout} from "../data.js";

export async function registerPage() {
    this.partials = {
        header: await this.load('./templates/common/header.hbs'),
        footer: await this.load('./templates/common/footer.hbs')
    };

    this.partial('./templates/user/register.hbs');
}

export async function loginPage() {
    this.partials = {
        header: await this.load('./templates/common/header.hbs'),
        footer: await this.load('./templates/common/footer.hbs')
    };

    this.partial('./templates/user/login.hbs');
}

export async function logout() {
    try {
        await apiLogout();
        this.app.userData.email = '';
        this.app.userData.userId = '';

        showInfo('Successful logout')
        this.redirect('#/login');
    } catch (err) {
        showError(err.message);
    }
}

export async function registerPost() {
    try {

        if (this.params.email.length === 0) {
            throw new Error('Email can\'t be empty');
        }

        if (this.params.password.length < 6) {
            throw new Error('Password must be at least 6 characters long');
        }

        if (this.params.password !== this.params.repeatPassword) {
            throw new Error('Passwords don\'t match');
        }

        const result = await register(
            this.params.email,
            this.params.password
        );
        checkResult(result);

        const loginResult = await login (this.params.email, this.params.password);
        checkResult(loginResult);

        this.app.userData.email = loginResult.email;
        this.app.userData.userId = loginResult.objectId;

        showInfo('Successful registration!');
        this.redirect('#/home');
    } catch(err) {
        showError(err.message);
    }
}

export async function loginPost() {
    try {
        const result = await login(
            this.params.email,
            this.params.password
        );
        checkResult(result);

        this.app.userData.email = result.email;
        this.app.userData.userId = result.objectId;

        showInfo('Login successful.');
        this.redirect('#/home');
    } catch(err) {
        showError(err.message);
    }
}