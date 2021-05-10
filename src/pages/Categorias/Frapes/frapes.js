import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Frape extends Component {
    render() {
        return (
            <div class="container">
                <div class="card">
                    <div class="card-body">
                        <h1 class="card-title"><strong>Frape</strong></h1>
                       <Link className="btn btn-warning mt-2" to="home" role="button">Regresar</Link>
                     </div>
                </div>
            </div>

        )
    }
}

export default Frape;