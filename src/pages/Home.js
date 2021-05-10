import React, { Component } from 'react';
import '../Estilos/Home.css'
import Slide from '../componentes/carrusel/slide'
import Categoria from '../componentes/categorias/categoria';


class Home extends Component {
    render() {
        return (                         
            <div class="container">    
        
            <div class="card">
            <div class="card-body">
                <h1 class="card-title" >¿Qué se te antoja hoy?</h1>
                <div class="vacio"></div>
                <p class="card-text"><strong>Más pedidos</strong></p>
                <Slide />
                <br></br>
                <br></br>
                <p class="card-text"><strong>Categorias</strong></p>
                <br></br>
                <Categoria />
            </div>
            </div>
            </div> 
            

        )
    }
}

export default Home;

