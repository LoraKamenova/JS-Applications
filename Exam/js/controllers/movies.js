
import {showInfo, showError} from "../notification.js";
import {getAll, createMovie, checkResult, getMovieById, editMovie, deleteMovie as apiDelete} from "../data.js";

export async function home() {
    this.partials = {
        header: await this.load('./templates/common/header.hbs'),
        footer: await this.load('./templates/common/footer.hbs'),
        catalog: await this.load('./templates/movies/catalog.hbs')
    };

    const context = Object.assign({}, this.app.userData);

        const movies = await getAll();
        context.movies = movies;
    this.partial('./templates/home.hbs', context);
}

export async function createPage() {
    this.partials = {
        header: await this.load('./templates/common/header.hbs'),
        footer: await this.load('./templates/common/footer.hbs'),
    };

    this.partial('./templates/movies/create.hbs', this.app.userData);
}

export async function createPost() {
    const movie = {
        title: this.params.title,
        description: this.params.description,
        imageUrl: this.params.imageUrl,
        peopleLiked: ''
    }

    try {
        if (movie.title.length === 0) {
            throw new Error('Field Title can\'t be empty')
        }

        if (movie.description.length === 0) {
            throw new Error('Field Description can\'t be empty')
        }

        if (movie.imageUrl.length === 0) {
            throw new Error('Field Image can\'t be empty')
        }

        const result = await createMovie(movie);
        checkResult(result);

        showInfo('Created successfully!');
        this.redirect('#/home');
    } catch (err) {
        showError(err.message);
    }
}

export async function editPage() {
    this.partials = {
        header: await this.load('./templates/common/header.hbs'),
        footer: await this.load('./templates/common/footer.hbs'),
    };

    const movie = await getMovieById(this.params.id);
    const context = Object.assign({movie}, this.app.userData);

    await this.partial('./templates/movies/edit.hbs', context);

}

export async function editPost() {
    const id = this.params.id;

    const movie = await getMovieById(id);

    movie.title = this.params.title;
    movie.description = this.params.description;
    movie.imageUrl = this.params.imageUrl;

    try {
        if (movie.title.length === 0) {
            throw new Error('Field Title can\'t be empty')
        }

        if (movie.description.length === 0) {
            throw new Error('Field Description can\'t be empty')
        }

        if (movie.imageUrl.length === 0) {
            throw new Error('Field Image can\'t be empty')
        }

        const result = await editMovie(id, movie);
        checkResult(result);

        showInfo('Edited successfully');
        this.redirect('#/details/' + id);
    } catch (err) {
        showError(err.message);
    }
}

export async function detailsPage() {
    this.partials = {
        header: await this.load('./templates/common/header.hbs'),
        footer: await this.load('./templates/common/footer.hbs'),
    };

    const id = this.params.id;
    const movie = await getMovieById(this.params.id);
    const context = Object.assign({movie}, this.app.userData);

    if (movie.ownerId === this.app.userData.userId) {
        movie.canEdit = true;
    }

    await this.partial('./templates/movies/details.hbs', context);

    const span = document.getElementsByClassName("enrolled-span")[0]
    span.style.display = 'none';
}

export async function deleteMovie() {
    const id = this.params.id;
    try {
        const result = await apiDelete(id);
        checkResult(result);
        showInfo('Deleted successfully');
        this.redirect('#/home')
    } catch (err) {
        showError(err.message);
    }
}


