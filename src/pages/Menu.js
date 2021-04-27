import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Menu extends Component {
    render() {
        return (
            <div>
                <Link className="btn btn-primary" to="/" role="button">Regresar</Link>
                
                <h4>
                    Pagina de Menú
                </h4>

            </div>
        )
    }
}

export default Menu;