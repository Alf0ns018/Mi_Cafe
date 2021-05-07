import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Menu extends Component {
    render() {
        return (
            <div>
                <div class="container">
                    <div class="card">
                        <div class="card-body">
                            <h1 class="card-title">¿Qué se te antoja hoy?</h1>
                        </div>
                    </div>
                </div>
                <div class="col-auto"> <div class="col-sm-1">  <Link className="btn btn-primary mt-1 " to="/home" role="button">Regresar</Link> </div>
                </div>
            </div>
        )
    }
}

export default Menu;

// <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>