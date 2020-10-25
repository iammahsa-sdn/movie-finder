import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import './css/MovieCard.css'

 class MovieCard extends Component {
    render() {
        const {movie} = this.props
        return (
            <div className="col-md-3 mb-6">
                <div className="card card-body text-center h-100">
                <img className="w-100 mb-2" src={movie.Poster} alt="Movie Cover" />
                <h5 className=" card-title">
                    {movie.Title} - {movie.Year}
                </h5>
                <Link className="btn" to={'/movie/' + movie.imdbID}>
                    Movie Details
                    <i className="fas fa-chevron-right" />
                </Link>
                </div>
            </div>
        )
    }
}

export default MovieCard
