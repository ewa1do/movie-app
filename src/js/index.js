// 20ac2fd0b API KEY
// endPoint

const inputMovie = document.querySelector('.movie-input');
const btnMovie = document.querySelector('.btn-movie');

console.log(btnMovie);

const getJSON = async function (url) {
    const res = await fetch(url);

    const data = await res.json();

    return data;
}


const movieName = function (name) {
    const movie = name.split(' ')
        .map(word => word.toLowerCase())
        .join('+');

    return movie;
}

// movieName('rick & morty');


// const searchMovie = getJSON(`http://www.omdbapi.com/?t=${movieName('batman begins')}&apikey=20ac2fd0`)
// .then(data => console.log(data));



btnMovie.addEventListener('click', function (e) {
    e.preventDefault();

    const searchMovie = getJSON(`http://www.omdbapi.com/?t=${movieName(inputMovie.value)}&apikey=20ac2fd0`)
    .then(data => console.log(data));


    inputMovie.value = '';
});






// const search = getJSON('http://www.omdbapi.com/?i=tt3896198&apikey=20ac2fd0');


// const avengers = getJSON('http://www.omdbapi.com/?t=avengers&apikey=20ac2fd0b');

// avengers.then(data => console.log(data));


// http://www.omdbapi.com/?t=the+amazing+spider+man&apikey=20ac2fd0b




// search.then(data => console.log(data));


// search.then(data => console.log(data));


