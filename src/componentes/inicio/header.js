import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './header.css'

class Header extends Component {
    render() {
        return (
            <div id="header">
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <Link className="navbar-brand" to="/home"> <b> Mi Casa Café </b> </Link>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav">
                        <li class="nav-item">
                                <Link class="nav-link" to="menu"> Menú </Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="conocenos"> Conocenos </Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="/iniciars"> Iniciar Sesión </Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="/regis"> Registrar </Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        )
    }
}

export default Header;