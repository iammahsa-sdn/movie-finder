import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

function Navbar() {
    return (
        <div>
            <div className="container-fluid p-0">
                <nav className="navbar navbar-expand-lg">
                    <Link className="navbar-brand" to="/">
                        <i className="fas fa-film fa-3x mx-3"></i>
                    </Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <i className="fas fa-align-right"></i>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <div className="mr-auto"></div>
                        <ul className="navbar-nav">
                            <li className="nav-item active">
                                <a className="nav-link  mr-4" href="/">What to watch?
                                    <span className="sr-only">(current)</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </div>
    )
}

export default Navbar
