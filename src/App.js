import './App.css';
import request from 'superagent';
import React, { Component } from 'react'
import MoviesList from './MoviesList';

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
      <div className="movie-list">
        {
          this.state.movies.map(movie =>
            { return (
                <MoviesList 
                id={movie.id}
                name={movie.name}
                year={movie.year}
                oscars={movie.oscars}
                genre={movie.genre}
                ownerId={movie.owner_id}/>
              )
            })
        }
      </div>
    )
  }
}

