import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Categoria extends Component {
    render() {
        return (

            <div className="container servicios">
 
            <div className="row">
 
                <div className="col-lg-4">
                    <h2>Alitas</h2>
                    <p><a className="btn btn-secondary" target="_blank" href="https://api.whatsapp.com/send?phone=529341233398&text=Hola%20deseo%20ordenar" role="button">Ver más &raquo;</a></p>
                </div>
 
                <div className="col-lg-4">
                    <h2>Hamburguesas</h2>
                    <p><a className="btn btn-secondary" target="_blank" href="https://api.whatsapp.com/send?phone=529341233398&text=Hola%20deseo%20ordenar" role="button">Ver más &raquo;</a></p>
                </div>
 
                <div className="col-lg-4">
                    <h2>Frapes</h2>
                    <p><a className="btn btn-secondary" target="_blank" href="https://api.whatsapp.com/send?phone=529341233398&text=Hola%20deseo%20ordenar" role="button">Ver más &raquo;</a></p>
                </div>
 
            </div>
 
        </div>
 
    )
    
  }
 
}

export default Categoria;