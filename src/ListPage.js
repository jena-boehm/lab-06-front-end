import './App.css';
import request from 'superagent';
import React, { Component } from 'react';
import MoviesRender from './MoviesRender.js'
import { Link } from 'react-router-dom';
import { fetchMovies } from './fetches.js';

export default class App extends Component {
state = {
  movies: []
}

  componentDidMount = async () => {
    const movies = await fetchMovies();

    this.setState({ movies });
  }

  render() {
    const { movies } = this.state;
    return (
      <div>
        <Link to="/create">Create Page</Link>
      <div className="movie-list">
        {
          movies.map(movie => 
            <MoviesRender
              name={movie.name}
              year={movie.year}
              oscars={movie.oscars}
              genre={movie.genre}
              ownerId={movie.owner_id} />
            )
        }
      </div>
      </div>
    )
  }
}

