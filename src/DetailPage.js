import React, { Component } from 'react'
import MoviesRender from './MoviesRender.js'
import { Link } from 'react-router-dom';
import {
    fetchGenres,
    updateMovie,
    fetchMovie,
    deleteMovie
} from './APIFunctions.js';

const user = {
    userId: 1
};


export default class DetailPage extends Component {
    state = {
        genres: [],
        genreId: 1,
        movieData: {},
        matchingGenre: {name: ''},
        name: '',
        year: 0,
        oscars: true,
        ownerId: 1
    }

    componentDidMount = async () => {
        const genres = await fetchGenres();
        const movie = await fetchMovie(this.props.match.params.id);
        const matchingGenre = genres.find((genre) => {
            return genre.id === movie.genre_id
        });

        this.setState({
            genres: genres,
            genreId: matchingGenre.id,
            matchingGenre: matchingGenre,
            movieData: movie,
            name: movie.name,
            year: movie.year,
            oscars: movie.oscars,
            ownerId: user.userId
        });
    }

    handleSubmit = async (e) => {
        e.preventDefault();

        await updateMovie(
            this.props.match.params.id,
            {
                name: this.state.name,
                year: this.state.year,
                oscars: this.state.oscars,
                genre_id: this.state.genreId,
                owner_id: user.userId
            });

            this.props.history.push('/');
    }

    handleDelete = async (e) => {
        e.preventDefault();
        await deleteMovie(this.state.id);
        this.props.history.push('/');
    }

    render() {
        console.log(this.state.movieData, this.state.matchingGenre);
        return (
            <div>
                <Link to="/">Home</Link> |
                | <Link to="/create">Add a Movie</Link>
                <div className="movie-detail">
                    <MoviesRender
                        name={this.state.movieData.name}
                        year={this.state.movieData.year}
                        oscars={this.state.movieData.oscars}
                        genre={this.state.matchingGenre.genre}
                        ownerId={this.state.movieData.owner_id} />
                </div>
                <h1>Update {this.state.movieData.name}</h1>
                <div>Please fill out this form to update this movie in the database.</div>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Name
                        <input onChange={e => this.setState({ name: e.target.value})} value={this.state.name}/>
                    </label>
                    <label>
                        Year
                        <input onChange={e => this.setState({ year: e.target.value})} type="number" value={this.state.year}/>
                    </label>
                    <label>
                        Oscars
                        <input onChange={e => this.setState({ oscars: e.target.value})} type="radio" value={true} name="oscars" />
                        <input onChange={e => this.setState({ oscars: e.target.value})} type="radio" value={false} name="oscars" />
                    </label>
                    <label>
                        Genre
                        <select onChange={(e) => this.setState({
                            genreId: e.target.value
                        })}>
                            {
                                this.state.genres.map(genre =>
                                    <option key={genre.id} value={genre.id}>
                                        {genre.genre}
                                    </option>)
                            }
                        </select>
                    </label>
                    <label>
                        Owner ID
                        <input onChange={e => this.setState({ owner_id: e.target.value})} type="number" value={this.state.ownerId}/>
                    </label>
                    <button>Update</button>
                </form>
                <button onClick={this.handleDelete}>Delete Movie</button>
            </div>
        )
    }
}
