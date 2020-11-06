import request from 'superagent';

const URL = process.env.REACT_APP_API_URL || 'https://safe-ridge-25828.herokuapp.com'

export async function fetchMovies() {
    try {
        const response = await request.get(`${URL}/movies`);
        return response.body;
    } catch(err) {
        throw err;
    }
}

export async function fetchMovie(someId) {
    try {
        const response = await request.get(`https://safe-ridge-25828.herokuapp.com/movies/${someId}`);

        return response.body;
    } catch(err) {
        throw err;
    }
}

export async function fetchGenres() {
    try {
        const response = await request.get(`https://safe-ridge-25828.herokuapp.com/genres`);

        return response.body;
    } catch(err) {
        throw err;
    }
}

export async function createMovie(newMovie) {
    try {
        await request
        .post(`https://safe-ridge-25828.herokuapp.com/movies`)
        .send(newMovie);

        return;
    } catch(err) {
        throw err;
    }
}

export async function updateMovie(someId, newMovie) {
    try {
        await request
        .put(`https://safe-ridge-25828.herokuapp.com/movies/${someId}`)
        .send(newMovie);

        return;
    } catch(err) {
        throw err;
    }
}

export async function deleteMovie(someId) {
    try {
        await request.delete(`https://safe-ridge-25828.herokuapp.com/movies/${someId}`);

        return;
    } catch(err) {
        throw err;
    }
}