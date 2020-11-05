import './App.css';
import request from 'superagent';
import React, { Component } from 'react';
import MoviesRender from './MoviesRender.js'
import { Link } from 'react-router-dom';

export default class App extends Component {
state = {
  movies: []
}

  componentDidMount = async () => {
    await this.fetchMovies();
  }

  fetchMovies = async () => {
      const response = await request.get(`https://safe-ridge-25828.herokuapp.com/movies`)

      await this.setState({ movies: response.body })
  }

  render() {
    return (
      <div>
        <Link to="/create">Create Page</Link>
      <div className="movie-list">
        {
          this.state.movies.map(movie => 
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

