import { mark } from "regenerator-runtime";

export default class View {
    _data;
    _header = document.querySelector('.hero-container');

    render (data, render = true) {
        this._data = data;

        console.log(data);

        if (!data || Object.entries(data).length === 0) throw new Error('No data');

        const markup = this._generateMarkup();

        if (!render) return markup;

        this._clear();
        this._parentElement.style.height = '100vh';
        this._parentElement.insertAdjacentHTML('afterbegin', markup);

        this._animationSlide();
    }

    _clear () {
        this._parentElement.innerHTML = '';
    }


    _animationSlide () {
        this._header.style.height = '10vh';
        this._header.style.transition = 'all .8s ease';
        this._header.style.flexDirection = 'row';
        this._header.style.justifyContent = 'space-around';
        document.querySelector('.titles h3').style.display = 'none';
        document.querySelector('.titles h1').textContent = 'Muviapi';
        document.querySelector('.titles h1').style.fontSize = '4rem';
    }


}

