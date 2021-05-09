import '../Estilos/iniciosesion.css';

import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Conocenos extends Component {
    render() {
        return (
            <div>
                <div class="tarjeta">
                    <div class="card-body">
                       <center> <h5> Pag de Conocenos </h5>  </center>
                       <Link className="btn btn-warning mt-2" to="home" role="button">Regresar</Link>
                     </div>
                </div>
            </div>

        )
    }
}

export default Conocenos;