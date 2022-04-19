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

        // await model.findMovieInWikipedia(model.state.movie.id);

        // await model.getCastData(model.state.movie.id);

        movieView.render(model.state.data);
    } catch (err) {
        console.error(`${err} 🔥🔥!!`);
    }
}




// const header = document.querySelector('.hero-container');

// const movieForm = document.querySelector('.movie-form');

// movieForm.addEventListener('submit', function (e) {
//     e.preventDefault();

//     console.log('hola');

//     animationSlide(header);
//     // header.classList.remove('hero-container');
//     // header.classList.add('animation-shrink-header');
// });


const init = function () {
    searchView.addHandlerSearchMovie(controlMovie);
}
init();