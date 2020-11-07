import React, { Component } from 'react';
import './App.css';
import {
    BrowserRouter as Router, 
    Route, 
    Switch,
} from 'react-router-dom';
import ListPage from './ListPage.js';
import CreatePage from './CreatePage.js';
import DetailPage from './DetailPage.js';
import Header from './Header.js';


export default class App extends Component {
    render() {
        return (
            <div>
                <Router>
                    <Header className="header" />
                    <Switch>
                        <Route
                            path="/"
                            exact
                            render={(routerProps) => <ListPage {...routerProps} />}
                        />
                        <Route
                            path="/create"
                            exact
                            render={(routerProps) => <CreatePage {...routerProps} />}
                        />
                        <Route
                            path="/movie/:id"
                            exact
                            render={(routerProps) => <DetailPage {...routerProps} />}
                        />
                    </Switch>
                </Router>
            </div>
        )
    }
}
