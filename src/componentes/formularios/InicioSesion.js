import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../../Estilos/iniciosesion.css'
import login from '../../img/login.png'

class InicioSesion extends Component {
    render() {
        return (
            <div>

                <div class="tarjeta text-center mb-2 ">
                    <div class="card-header">
                        <strong>Iniciar Sesión</strong>
                    
                     </div>

                    <div class="card-body  mb-3">
                    <img src={login}></img>
                    <br></br>
                        <form>
                            <div className="form-group">
                                
                                <input type="email" className="form-control text-center" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                            </div>

                            
                            <input type="password" id="inputPassword5" class="form-control text-center" aria-describedby="passwordHelpBlock" placeholder="Enter Password" />

                            <div class="form-group form-check">
                                <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                                <label class="form-check-label" for="exampleCheck1"> Recuerdame</label>
                            </div>

                            <button type="submit" class="btn btn-warning bg- mx-2 mt-10">Enviar</button>
                            <Link className="btn btn-warning " to="home" role="button">Regresar</Link>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default InicioSesion;


