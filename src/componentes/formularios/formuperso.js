
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../../Estilos/forperso.css'
import registro from '../../img/registro.svg'

class formuperso extends Component {
    render() {
        return (
            <div>
                <div class="tarjeta text-center">
                    <div class="card-header">
                        <strong>Registro</strong>
                     </div>

                    <div class="card-body ">
                    <img src={registro}></img>
                    <br></br>
                        <form>
                            <div className="form-group">
                               
                                <input type="email" className="form-control text-center" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                            </div>
                            <div className="form-group">
                              
                                <input type="text" className="form-control text-center" name=" Nombre " placeholder="Introduzca su Nombre" />
                            </div>
                            <div className="form-group">
                                
                                <input type="text" className="form-control text-center" name=" Apellido_Paterno " placeholder="Introduzca su Apellido Paterno" />
                            </div>
                            <div className="form-group">
                               
                                <input type="text" className="form-control text-center" name=" Apellido_Materno " placeholder="Introduzca su Apellido Materno" />
                            </div>
                           
                            <input type="password" id="inputPassword5" class="form-control text-center" aria-describedby="passwordHelpBlock" placeholder="Your password must be 8-20 characters long, contain letters and numbers, and must not contain spaces, special characters, or emoji." />

                            <button type="submit" className="btn btn-warning mx-2 mt-2">Enviar</button>
                            <Link className="btn btn-warning mt-2" to="/home" role="button">Regresar</Link>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default formuperso;