import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Somos extends Component {
    render() {
        return (
            <div class="container">
                <div class="card">
                    <div class="card-body">
                        <h1 class="card-title"><strong> ¿Quienes somos? </strong></h1>

                        <nav class="navbar navbar-light bg-light">
                            <a class="navbar-brand" href="#"> ¿Quienes Somos?</a> 
                            <a class="navbar-brand" href="#"> Misión </a> 
                            <a class="navbar-brand" href="#"> Vision </a> 
                            <a class="navbar-brand" href="#"> Metas </a> 
                        </nav>



                        <Link className="btn btn-warning mt-2" to="home" role="button">Regresar</Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default Somos;