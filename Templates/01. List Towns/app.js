// window.addEventListener('load', () => {
//     const rootEl = document.querySelector('#root');
//
//     //зареждане на темплейт - текст
//     const templateString = '<h1>This is a heading</h1>';
//
//     //компилиране на темплейта - функция
//     const templateFn = Handlebars.compile(templateString);
//
//     //изпълнение на темплейта с нашите данни(променливи) -> текст (HTML)
//     const generatedHtml = templateFn({});
//
//     //поставяне на генерирания HTML в DOM
//     rootEl.innerHTML = generatedHtml;
// })

// window.addEventListener('load', () => {
//     const rootEl = document.querySelector('#root');
//
//     //зареждане на темплейт - текст
//     const templateString = '<h1>{{label}}</h1><div>{{text}}</div>';
//
//     //компилиране на темплейта - функция
//     const templateFn = Handlebars.compile(templateString);
//
//     //изпълнение на темплейта с нашите данни(променливи) -> текст (HTML)
//     const generatedHtml = templateFn({label: 'This is an interpolated heading', text: 'This will appear inside a div'});
//
//     //поставяне на генерирания HTML в DOM
//     rootEl.innerHTML = generatedHtml;
// })

// window.addEventListener('load', () => {
//     const rootEl = document.querySelector('#root');
//
//     //зареждане на темплейт - текст
//     const templateString = document.getElementById('main-template').innerHTML;
//
//     //компилиране на темплейта - функция
//     const templateFn = Handlebars.compile(templateString);
//
//     //изпълнение на темплейта с нашите данни(променливи) -> текст (HTML)
//     const generatedHtml = templateFn({label: 'This is an interpolated heading', text: 'This will appear inside a div'});
//
//     //поставяне на генерирания HTML в DOM
//     rootEl.innerHTML = generatedHtml;
// })
//
// window.addEventListener('load', () => {
//     document.querySelector('#btnLoadTowns').addEventListener('click', renderTowns);
//     const input = document.querySelector('#towns');
//     const rootEl = document.querySelector('#root');
//
//     function renderTowns(e) {
//         e.preventDefault();
//         const towns = input.value.split(', ');
//         console.log(towns);
//
//         //зареждане на темплейт - текст
//         const templateString = document.getElementById('main-template').innerHTML;
//
//         //компилиране на темплейта - функция
//         const templateFn = Handlebars.compile(templateString);
//
//         //изпълнение на темплейта с нашите данни(променливи) -> текст (HTML)
//         const generatedHtml = templateFn({towns});
//
//         //поставяне на генерирания HTML в DOM
//         rootEl.innerHTML = generatedHtml;
//     }
// })

// window.addEventListener('load', () => {
//     //зареждане на темплейт - текст
//     const templateString = document.getElementById('main-template').innerHTML;
//     Handlebars.registerPartial('town', document.getElementById('town-template').innerHTML);
//
//     //компилиране на темплейта - функция
//     const templateFn = Handlebars.compile(templateString);
//
//     document.querySelector('#btnLoadTowns').addEventListener('click', renderTowns);
//     const input = document.querySelector('#towns');
//     const rootEl = document.querySelector('#root');
//
//     function renderTowns(e) {
//         e.preventDefault();
//         const towns = input.value.split(', ');
//
//         //изпълнение на темплейта с нашите данни(променливи) -> текст (HTML)
//         const generatedHtml = templateFn({towns});
//
//         //поставяне на генерирания HTML в DOM
//         rootEl.innerHTML = generatedHtml;
//     }
// })

window.addEventListener('load', async () => {
    //зареждане на темплейт - текст
    const templateString = await (await fetch('./main-template.hbs')).text();
    Handlebars.registerPartial('town', await (await fetch('./town-template.hbs')).text());

    //компилиране на темплейта - функция
    const templateFn = Handlebars.compile(templateString);

    document.querySelector('#btnLoadTowns').addEventListener('click', renderTowns);
    const input = document.querySelector('#towns');
    const rootEl = document.querySelector('#root');

    function renderTowns(e) {
        e.preventDefault();
        const towns = input.value.split(', ');

        //изпълнение на темплейта с нашите данни(променливи) -> текст (HTML)
        const generatedHtml = templateFn({towns});

        //поставяне на генерирания HTML в DOM
        rootEl.innerHTML = generatedHtml;
    }
})