import { API_KEY, GET_ACTORS_URL, GET_MOVIE_URL, GET_WIKIPEDIA_URL } from './config.js';
import { AJAX, createURLString } from './helpers.js';

export const state = {
    movie: {},
    wikiData: {},
    cast: {
        director: {},
        actors: {},
    }
}

export const loadMovie = async function (query) {
    try {
        const data = await AJAX(`${GET_MOVIE_URL}/${API_KEY}/${createURLString(query)}`);

        // console.log(data);
        const [results] = data.results;

        if (!results) throw new Error(`There are no movies named ${query}, pleasea try again with another name`);

        state.movie = {
            id: results.id,
            title: results.title,
            image: results.image,
        };
        
        // console.log(state.movie);

    } catch (err) {
        console.error(`${err} 🔥🔥!!`);
        throw err;
    }
}


export const findMovieInWikipedia = async function (id = state.movie.id) {
    try {
        const data = await AJAX(`${GET_WIKIPEDIA_URL}/${API_KEY}/${id}`);

        state.wikiData = {
            id,
            url: data.url,
            year: data.year,
            plot: data.plotShort,
        }
        
        // console.log(state.wikiData);
    } catch (err) {
        throw err;
    }
}


export const getCastData = async function (id = state.movie.id) {
    try {
        const data = await AJAX(`${GET_ACTORS_URL}/${API_KEY}/${id}`);

        // console.log(data);

        state.cast.director = {
            director: data.directors.items,
        }

        state.cast.actors = {
            actors: data.actors.filter((_, i) => i < 10),
        }
        
        // console.log(state.cast);

    } catch (err) {
        throw err;
    }
}