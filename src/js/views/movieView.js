import View from './View.js';

class MovieView extends View {
    _parentElement = document.querySelector('.section__movie');

    _generateMarkup () {
        return `
            <div class="movie__poster" 
                style="
                    background: linear-gradient(to right, rgba(0, 173, 181, .5), rgba(0, 173, 181, .65)), url(${this._data.image});
                    background-size: cover;
                    ">
                    <figure>
                        <img src="${this._data.image} alt="movie poster">
                    </figure>
            </div>
            <div class="movie__info">
                <div class="movie__title">
                    <h2>${this._data.title}</h2>
                </div>

                <div class="movie__wrapper movie__wrapper--1">
                    <div class="movie__rated">
                        <h3>${this._data.contentRating}</h3>
                    </div>
                    <div class="movie__date">
                        <span class="movie__release--date">Release: ${this._data.releaseDate}</span>
                        <span class="movie__release--year">${this._data.year}</span>    
                    </div>
    
                    <div class="movie__country">
                        <p>Country: 
                            <img class="movie__flag" src="${this._data.flag}">
                        </p>
                    </div>
    
                    <div class="movie__genre">
                        <ul>
                            ${this._data.genreList.map(genre => `<li>${genre.value}</li>`).join('')}
                        </ul>
                    </div>
                </div>

                <div class="movie__wrapper movie__wrapper--3">
                    <div class="movie__awards">
                        <p>🏆${this._data.awards}</p>
                    </div>

                    <div class="movie__ratings">
                        <ul>
                            <li class="movie__rating--imdb">
                                <span>IMDb: ${this._data.imDbRating}/10</span>
                            </li>
                            <li class="movie__rating--metracritic">
                                <span>Metacritic: ${this._data.metacriticRating}/100</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div class="movie__wrapper movie__wrapper--2">
                    <div class="movie__description">
                        <h3>${this._data.tagline || ''}</h3>
                        <p class="description">
                            ${this._data.plot}
                        </p>
                    </div>
    
                    <div class="movie__director">
                        <span>Director: ${this._data.directorList.map(director => director.name)}</span>
                    </div>
    
                    <div class="movie__actors">
                        <ul>
                            ${this._data.actorList.map(this._generateMarkupList).join(' ')}
                        </ul>
                    </div>
                </div>

            </div>
        `;
    }

    _generateMarkupList (actor) {
        return `
            <li>
                <img src="${actor.image}">
                <h4>${actor.name}</h4>
                <span>${
                    actor.asCharacter.split(' ')
                    .slice((actor.asCharacter.split(' ').length / 2))
                    .join(' ')}
                </span>
            </li>
        `;
    }
}
export default new MovieView();