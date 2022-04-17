import * as model from './model.js'

const controlMovie = async function () {
    try {
        await model.loadMovie(`don't fuck with cats`);
        
    } catch (err) {
        console.error(`${err} 🔥🔥!!`);
    }
}

controlMovie();


