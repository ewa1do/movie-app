export default class View {
    _data;

    render (data, render = true) {
        this._data = data;

        console.log(data);
        console.log(data.movie.image);

        const markup = this._generateMarkup();

        document.querySelector('.movie__title').insertAdjacentHTML('afterbegin', markup);
        // document.querySelector('.movie__poster').style.background = `
        //     linear-gradient(to right, rgba(0, 173, 181, .2), rgba(0, 173, 181, .4)), url(${data.movie.image})`;
        document.querySelector('.movie__poster').style.cssText = `
            background: linear-gradient(to right, rgba(0, 173, 181, .2), rgba(0, 173, 181, .4)), url(${data.movie.image});
            background-size: cover;
            width: 30%;
            position: relative;
            box-shadow: 5px 0px 10px black;
        `
    }

    // _clear () {
    //     this._parentElement.innerHTML
    // }

}

