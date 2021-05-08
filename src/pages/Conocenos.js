
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Conocenos extends Component {
    render() {
        return (
            <div>
                esta es la pagina conocenos
                <br></br>
                <Link className="btn btn-warning mt-2" to="home" role="button">Regresar</Link>
            </div>

        )
    }
}

export default Conocenos;