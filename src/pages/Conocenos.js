import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Conocenos extends Component {
    render() {
        return (
            <div>
                 <div class="example-container">
                    <div class="row">

                        <div class="col-auto mr-auto"> <h4><i> Pagina de conocenos</i>g</h4> </div>
                        <div class="col-auto"> <div class="col-sm-1">  <Link className="btn btn-primary mt-1 " to="/" role="button">Regresar</Link> </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Conocenos;