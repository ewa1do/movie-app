import View from "./View";

class searchView extends View {
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
        })
    }
}

export default new searchView();