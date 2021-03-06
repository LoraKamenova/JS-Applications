import home from './controllers/home.js'
import about from './controllers/about.js'
import login, {loginPost, logout} from './controllers/login.js'
import register, {registerPost} from './controllers/register.js'
import catalog from './controllers/catalog.js'
import details from './controllers/details.js'
import create, {createPost} from './controllers/create.js'
import edit from './controllers/edit.js'

$(() => {
    const app = Sammy('#main', function() {
        this.use('Handlebars', 'hbs');

        this.userData = {
            loggedIn: false,
            hasTeam: false
        };

    this.get('index.html', home);
    this.get('#/home', home);
    this.get('/', home);
    this.get('#/about', about);

    this.get('#/register', register);
    this.get('#/login', login);
    this.get('#/logout', logout);

    this.get('#/catalog', catalog);
    this.get('#/catalog/:id', details);

    this.get('#/create', create);
    this.get('#/edit/:id', edit);

    this.post('#/register', (ctx) => { registerPost.call(ctx); });
    this.post('#/login', (ctx) => { loginPost.call(ctx); });
    this.post('#/create', (ctx) => { createPost.call(ctx); });

    });

    app.run();
})

// $(() => {
//     const app = Sammy('#main', function() {
//         this.use('Handlebars', 'hbs');
//
//         this.userData = {
//             loggedIn: false,
//             hasTeam: false
//         };
//
//         this.get('index.html', async function () {
//             this.partials = {
//                 header: await this.load('./templates/common/header.hbs'),
//                 footer: await this.load('./templates/common/footer.hbs')
//             };
//             this.partial('./templates/home/home.hbs', this.app.userData);
//
//             // this.get('index.html', function () {
//             //     this.loadPartials({
//             //         header: './templates/common/header.hbs',
//             //         footer: './templates/common/footer.hbs'
//             //     }).then(function () {
//             //         this.partial('./templates/home/home.hbs');
//             //     })
//
//             // this.render('./templates/register/registerForm.hbs').then(function (html) {
//             //     this.swap(html);
//             // });
//
//         });
//     });
//
//     app.run();
// })
