import React, { Component } from 'react'
import request from 'superagent';

const user = {
    userId: 1
};


export default class CreatePage extends Component {
    state = {
        genres: [],
        genreId: 1
    }

    componentDidMount = async () => {
        const response = await request.get('https://safe-ridge-25828.herokuapp.com/genres');

        this.setState({ genres: response.body });
    }

    handleSubmit = async (e) => {
        e.preventDefault();

        const newMovie = {
            genre_id: this.state.genreId,
            name: this.state.name,
            oscars: this.state.oscars,
            year: this.state.year,
            owner_id: user.userId
        };

        await request
            .post('https://safe-ridge-25828.herokuapp.com/movies')
            .send(newMovie);

            this.props.history.push('/');
    }

    // handleChange = (e) => {
    //     this.setState({ genreId: e.target.value });
    //     console.log(e.target.value);
    // }

    render() {
        console.log(this.state.genres);
        return (
            <div className="create-page">
                <h1>Add a New Movie</h1>
                <form className="create-form" onSubmit={this.handleSubmit}>
                    <label className="create-label">
                        Name: 
                        <input onChange={e => this.setState({ name: e.target.value})} />
                    </label>
                    <label className="create-label">
                        Year: 
                        <input onChange={e => this.setState({ year: e.target.value})} type="number" />
                    </label>
                    <label className="create-label">
                        Oscars: 
                        <input onChange={e => this.setState({ oscars: e.target.value})} type="radio" value="true" name="oscars" />True 
                        <input onChange={e => this.setState({ oscars: e.target.value})} type="radio" value="false" name="oscars" />False
                    </label>
                    <label className="create-label">
                        Genre: 
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
                    <label className="create-label">
                        Owner ID: 
                        <input onChange={e => this.setState({ owner_id: e.target.value})} type="number" />
                    </label>
                    <button className="create-submit">Submit</button>
                </form>
            </div>
        )
    }
}
