import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Conocenos extends Component {
    render() {
        return (
            <div>
                <Link className="btn btn-primary" to="/" role="button">Regresar</Link>
                <h4>esta es la pagina de conocenos</h4>

            </div>
        )
    }
}

export default Conocenos;