import { API_KEY, SEARCH_MOVIE_URL } from './config.js';
import { AJAX, createURLString } from './helpers.js';


const state = {
    movie: {},
}

export const loadMovie = async function (name) {
    try {
        const data = await AJAX(`${SEARCH_MOVIE_URL}/${API_KEY}/${createURLString(name)}`);

        const [results] = data.results;

        console.log(results);

    } catch (err) {
        console.error(`${err} 🔥🔥!!`);
        throw err;
    }
}