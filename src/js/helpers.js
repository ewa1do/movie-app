// import { reject } from "core-js/fn/promise";
import { API_KEY, TIMEOUT_SEC } from "./config";


export const timeout = function (sec) {
    return new Promise(function (_, reject) {
        setTimeout(function () {
            reject(new Error(`Request took to long! Timeout after ${sec} seconds`));
        }, sec * 1000);
    });
}

export const createURLString = (name) => 
    name.split(' ').map(word => word.toLowerCase()).join('%20');


export const AJAX = async function (url) {
    try {
        const fetchPro = fetch(url);
        const response = await Promise.race([fetchPro, timeout(TIMEOUT_SEC)]);
        const data = await response.json();

        return data;

    } catch (err) {
        throw err;
    }
}

// export const AJAX = function (url) {
//     return fetch (url)
//     .then(res => {
//         data = res.json();
//         return data;
//     }).then(data => {
//         const [firstResult] = data.results;
//         return firstResult;
//     }).then(result => {
//         console.log(result);
//         const wikiData = fetch(`https://imdb-api.com/en/API/Wikipedia/${API_KEY}/${result.id}`);

//         return wikiData;
//     }).then(wikiRes => wikiRes.json())
//     .then(wiki => console.log(wiki));
// }
