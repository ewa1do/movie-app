// import { API_KEY } from './config';
// import { AJAX } from './helpers';

// const inputMovie = document.querySelector('.movie-input');
// const btnMovie = document.querySelector('.btn-movie');

// let fetchRes;

// console.log(btnMovie);

// const getJSON = async function (url) {
//     const res = await fetch(url);

//     const data = await res.json();

//     return data;
// }

// const movieName = function (name) {
//     const movie = name.split(' ')
//         .map(word => word.toLowerCase())
//         .join('%20');

//     return movie;
// }

// console.log(movieName('rick & morty'));


// const searchMovie = getJSON(`http://www.omdbapi.com/?t=${movieName('batman begins')}&apikey=20ac2fd0`)
// .then(data => console.log(data));



// btnMovie.addEventListener('click', function (e) {
//     e.preventDefault();

//     // getJSON(`https://imdb-api.com/API/SearchMovie/${API_KEY}/${movieName(inputMovie.value)}`)
//     // .then(data => {
//     //     const [firstRes] = data.results;

//     //     console.log(firstRes);

//     //     return firstRes;
//     // }).then(result => {
//     //     const data = fetch(`https://imdb-api.com/en/API/Wikipedia/${API_KEY}/${result.id}`);

//     //     return data;
//     // }).then(res => {
//     //     const data = res.json();

//     //     return data;
//     // }).then(data => console.log(data));

//     const movie = AJAX(`https://imdb-api.com/API/SearchMovie/${API_KEY}/${movieName(inputMovie.value)}`);
    
//     // console.log(movie);
    
//     inputMovie.value = '';
// });



// const search = getJSON('http://www.omdbapi.com/?i=tt3896198&apikey=20ac2fd0');


// const avengers = getJSON('http://www.omdbapi.com/?t=avengers&apikey=20ac2fd0b');

// avengers.then(data => console.log(data));


// http://www.omdbapi.com/?t=the+amazing+spider+man&apikey=20ac2fd0b




// search.then(data => console.log(data));


// search.then(data => console.log(data));

