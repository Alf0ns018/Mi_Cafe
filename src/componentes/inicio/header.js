import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <Link className="navbar-brand" to="/home"> Mi Casa Café </Link>
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