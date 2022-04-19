import View from './View.js';

const header = document.querySelector('.hero-container');

export const animationSlide = function () {
    header.style.height = '10vh';
    header.style.transition = 'all .8s ease';
    header.style.flexDirection = 'row';
    header.style.justifyContent = 'space-around';
    document.querySelector('.titles h3').style.display = 'none';
    document.querySelector('.titles h1').textContent = 'Muviapi';
    document.querySelector('.titles h1').style.fontSize = '4rem';
}

class MovieView extends View {
    _parentElement = document.querySelector('.movie-form');

    getQuery () {
            const query = this._parentElement.querySelector('.movie-input').value;
            this._clearInput();
            return query;
    }
    
    _clearInput () {
        this._parentElement.querySelector('.movie-input').value = '';
    }

    addHandlerSearchMovie (handler) {
        this._parentElement.addEventListener('submit', function (e) {
            e.preventDefault();
            handler();
            animationSlide();
        })
    }


    _generateMarkup () {
        return `
            <div class="movie__poster">
                <img src="${this._data.movie.image}" alt="movie-poster">
            </div>  
        `;
    }
}

export default new MovieView();