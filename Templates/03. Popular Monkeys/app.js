import monkeys from './monkeys.js';

window.addEventListener('load', async () => {
    const  mainEl = document.querySelector('section');

    //initialize templates
    const mainString = await (await fetch('./main.hbs')).text();
    const mainTemplate = Handlebars.compile(mainString);
    Handlebars.registerPartial('monkey', await (await fetch('./monkey.hbs')).text());

    //render HTML
    const html = mainTemplate({monkeys});
    mainEl.innerHTML = html;

    //set up interactions
    const monkeysEl = document.querySelector('.monkeys');
    monkeysEl.addEventListener('click', onClick);

    function onClick(e) {
        if(e.target.tagName !== 'BUTTON') {
            return;
        }

        const div = e.target.parentNode.querySelector('p');
            div.removeAttribute('style');
    }
})