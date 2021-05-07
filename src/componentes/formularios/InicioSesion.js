import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class InicioSesion extends Component {
    render() {
        return (
            <div>

                <div className="card mt-3">
                    <div class="card-header">
                        Inicio de Sesión
                        </div>
                    <form>
                        <div className="mb-3">
                            <label for="exampleInputEmail1" class="form-label">Email address</label>
                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        </div>
                        <div className="mb-3">
                            <label for="exampleInputPassword1" class="form-label">Password</label>
                            <input type="password" class="form-control" id="exampleInputPassword1" />
                        </div>

                        <button type="submit" class="btn btn-primary mt-2">Enviar</button>
                        <Link className="btn btn-primary mt-2" to="home" role="button">Regresar</Link>
                    </form>
                </div> 
            </div>
        )
    }
}

export default InicioSesion;


