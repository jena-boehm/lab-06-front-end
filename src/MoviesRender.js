import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class MoviesList extends Component {
    render() {
        return (
            <div className="movie">
                <div className="id">{this.props.id}</div>
                <div className="movie-name">Movie: {this.props.name}</div>
                <div className="year">Year: {this.props.year}</div>
                <div className="oscars">Oscars: {this.props.oscars ? 'Yes' : 'No'}</div>
                <div className="genre">Genre: {this.props.genre}</div>
                <div className="owner-id">Owner Id: {this.props.ownerId}</div>
            </div>
        )
    }
}