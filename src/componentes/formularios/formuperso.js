import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class formuperso extends Component {
    render() {
        return (
            <div>
                <div class="card mt-4">
                    <div class="card-header">
                        Registro
  </div>
                    <div class="card-body">
                        <form>
                            <div className="form-group">
                                <label for="exampleInputEmail1">Email address</label>
                                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                                <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                            </div>
                            <div className="form-group">
                                <label for="exampleInputPassword1">Nombre</label>
                                <input type="text" className="form-control" name=" Nombre " placeholder="Introduzca su Nombre" />
                            </div>
                            <div className="form-group">
                                <label for="exampleInputPassword1">Apellido Paterno</label>
                                <input type="text" className="form-control" name=" Nombre " placeholder="Introduzca su Apellido Paterno" />
                            </div>
                            <div className="form-group">
                                <label for="exampleInputPassword1">Apellido Materno</label>
                                <input type="text" className="form-control" name=" Nombre " placeholder="Introduzca su Apellido Materno" />
                            </div>
                            <label for="inputPassword5" class="form-label">Contraseña</label>
                            <input type="password" id="inputPassword5" class="form-control" aria-describedby="passwordHelpBlock" />
                            <div id="passwordHelpBlock" class="form-text">
                                Your password must be 8-20 characters long, contain letters and numbers, and must not contain spaces, special characters, or emoji.
</div>
                            <button type="submit" className="btn btn-primary">Enviar</button>
                            <Link className="btn btn-primary" to="/" role="button">Regresar</Link>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default formuperso;