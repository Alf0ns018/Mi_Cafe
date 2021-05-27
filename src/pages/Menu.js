import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Menu extends Component {
    render() {
        return (
            <div class="container">
                <div class="card">
                    <div class="card-body">
                        <h1 class="card-title"><strong>Menu</strong></h1>
                       <Link className="btn btn-warning mt-2" to="home" role="button">Regresar</Link>
                       <br></br>
                       <a className="btn btn-warning mt-2" href="https://drive.google.com/file/d/1sNwqu-Ab5s9Ja94kpbtkULvDwneK9CnJ/view?usp=sharing" target="_blank" role="button">Ver menu</a>
                     </div>
                </div>
            </div>

        )
    }
}
export default Menu;

// <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>