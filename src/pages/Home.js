import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {
    render() {
        return (
            <div>
                <div class="container">
                    <div class="row align-items-start">
                        <div class="Bienvenido">
                        <h1>Bienvenidos</h1>
                         </div>
                        <div class="Inicio_Registrar">
                            <Link className="btn btn-primary mt-2" to="sesion" role="button">Iniciar Sesión</Link>
                            <Link className="btn btn-primary mt-2" to="formu" role="button">Registar</Link>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Home;