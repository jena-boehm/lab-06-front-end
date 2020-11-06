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

