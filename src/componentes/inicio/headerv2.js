import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './header.css'

class Headerv2 extends Component {
    render() {
        return (
            <div id="header">
                <nav class="navbar navbar-expand-lg navbar-light bg-light">
                    <Link class="navbar-brand" to="home">Mi casa cafe</Link>
                        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav mr-auto">
                        <li class="nav-item active">
                            <Link class="nav-link" to="menu">Menú<span class="sr-only">(current)</span></Link>
                        </li>

                        <li class="nav-item">
                            <Link class="nav-link" to="conocenos">Conocenos</Link>
                        </li>
                    </ul>

                    <form class="form-inline my-2 my-lg-0">
                        <Link class="nav-link" to="/iniciars">Sign in</Link>
                     
                    </form>

                    <form class="form-inline my-2 my-lg-0">
                    
                        <Link class="nav-link" to="/regis">Sign up</Link>
                    </form>
                </div>
            </nav>
            </div>
        )
    }
}

export default Headerv2;