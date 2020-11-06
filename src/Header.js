import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class Header extends Component {
    render() {
        return (
            <div className="header">
                <Link to="/" className="nav-link">
                    <div className="header-title">Movie Database</div>
                </Link>
                <div className="navigation">
                        <Link to="/" className="nav-link">Home</Link>
                        <span> | </span>
                        <Link to="/create" className="nav-link">Add a Movie</Link>
                </div>
            </div>
        )
    }
}