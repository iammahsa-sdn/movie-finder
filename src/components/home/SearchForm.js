import React, { Component } from 'react'
import {connect} from 'react-redux'
import './css/SearchForm.css'
import {searchMovie, fetchMovies, setLoading} from '../../actions/searchActions'


 class SearchForm extends Component {

    onChange = e => {
        this.props.searchMovie(e.target.value)
    }

    onSubmit = e => {
        e.preventDefault()
        this.props.fetchMovies(this.props.text)
        this.props.setLoading()
    }
    render() {
        return (
            <div className="container-fluid text-center">
                    <div className="row">
                        <div className="col-md-12">
                            <form id="searchForm" onSubmit={this.onSubmit}>
                                <div className="form-group">
                                    <label htmlFor="exampleInputEmail1">Let's Search!</label>
                                    <input 
                                    type="text" 
                                    className="form-control " 
                                    id="exampleInputEmail1"
                                    aria-describedby="emailHelp" 
                                    placeholder="search for a movie.." 
                                    onChange={this.onChange}/>
                                </div>
                                <button type="submit" className="btn px-5 py-2">Find Now</button>
                            </form>
                        </div>
                    </div>
                </div>
        )
    }
}

const mapStateToProps = state => ({
 text: state.movies.text
})

export default connect(mapStateToProps, {searchMovie, fetchMovies, setLoading})(SearchForm)
