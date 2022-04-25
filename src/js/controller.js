import * as model from './model.js'
import View from './views/View.js';
import movieView from './views/movieView.js';
import searchView from './views/searchView';


const controlMovie = async function () {
    try {
        const query = searchView.getQuery();

        // console.log(query);

        if (!query) return;

        await model.loadSearch(query);

        await model.getMovieData(model.state.id);

        await model.getTitleCountry(model.state.data.countryList);

        // await model.findMovieInWikipedia(model.state.movie.id);

        // await model.getCastData(model.state.movie.id);

        movieView.render(model.state.data);
    } catch (err) {
        console.error(`${err} 🔥🔥!!`);
    }
}

const init = function () {
    searchView.addHandlerSearchMovie(controlMovie);
}
init();



const header = document.querySelector('.hero-container');
const movieForm = document.querySelector('.movie-form');

// const animationSlide = function ()  {
//     header.style.height = '10vh';
//     header.style.transition = 'all .8s ease';
//     header.style.flexDirection = 'row';
//     header.style.justifyContent = 'space-around';
//     document.querySelector('.titles h3').style.display = 'none';
//     document.querySelector('.titles h1').textContent = 'Muviapi';
//     document.querySelector('.titles h1').style.fontSize = '4rem';
// }


// movieForm.addEventListener('submit', function (e) {
//     e.preventDefault();

//     console.log('hola');

//     animationSlide(header);
//     // header.classList.remove('hero-container');
//     // header.classList.add('animation-shrink-header');
// });

