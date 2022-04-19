import { API_KEY, GET_ACTORS_URL, GET_MOVIE_DATA, GET_MOVIE_URL, GET_WIKIPEDIA_URL, SEARCH_URL } from './config.js';
import { AJAX, createURLString } from './helpers.js';

export const state = {
    query: '',
    id: '',
    type: '',
    data: {},
}

const createMovieObject = function (data) {
    return {
        actorList: data.actorList,
        awards: data.awards,
        companyList: data.companyList,
        countryList: data.countryList,
        contentRating: data.contentRating,
        directorList: data.directorList,
        genreList: data.genreList,
        imDbRating: data.imDbRating,
        image: data.image,
        metacriticRating: data.metacriticRating,
        plot: data.plot,
        releaseDate: data.releaseDate,
        runtimeStr: data.runtimeStr,
        similars: data.similars,
        tagline: data.tagline,
        title: data.title,
        type: data.type,
        writerList: data.writerList,
        year: data.year
    }
}

export const loadSearch = async function (query) {
    try {
        state.query = query;
        const data = await AJAX(`${SEARCH_URL}/${API_KEY}/${createURLString(query)}`);

        // console.log(data);
        const [results] = data.results;

        if (!results) throw new Error(`There are no movies named ${query}, pleasea try again with another name`);
        
        state.id = results.id;

        // console.log(state);

    } catch (err) {
        console.error(`${err} 🔥🔥!!`);
        throw err;
    }
}


export const getMovieData = async function (id = state.id) {
    try {
        const data = await AJAX(`${GET_MOVIE_DATA}/${API_KEY}/${id}`);

        console.log(data);
        // console.log(data.type);

        state.data = createMovieObject(data);

        // console.log('data', state.data);

    } catch (err) {
        throw err;
    }
}


// export const findMovieInWikipedia = async function (id = state.movie.id) {
//     try {
//         const data = await AJAX(`${GET_WIKIPEDIA_URL}/${API_KEY}/${id}`);

//         state.wikiData = {
//             id,
//             url: data.url,
//             year: data.year,
//             plot: data.plotShort,
//         }
        
//         // console.log(state.wikiData);
//     } catch (err) {
//         throw err;
//     }
// }


// export const getCastData = async function (id = state.movie.id) {
//     try {
//         const data = await AJAX(`${GET_ACTORS_URL}/${API_KEY}/${id}`);

//         // console.log(data);

//         state.cast.director = {
//             director: data.directors.items,
//         }

//         state.cast.actors = {
//             actors: data.actors.filter((_, i) => i < 10),
//         }
        
//         // console.log(state.cast);

//     } catch (err) {
//         throw err;
//     }
// }