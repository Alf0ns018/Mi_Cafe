import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Somos extends Component {
    render() {
        return (
            <div>

                <div class="accordion text-center" id="accordionExample">
                    <div class="card">
                        <div class="card-header" id="headingOne">
                            <h2 class="mb-0">
                                <button class="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                    ¿Quienes Somos?
                                </button>
                            </h2>
                        </div>

                        <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
                            <div class="card-body">
                                Mi Casa Café nace de las necesidades
                             </div>
                        </div>
                    </div>
                    <div class="card">
                        <div class="card-header" id="headingTwo">
                            <h2 class="mb-0">
                                <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                    Metas
                                  </button>
                            </h2>
                        </div>
                        <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
                            <div class="card-body">
                                <ul>
                                    <li> Ofrecer un servicio y una calidad de productos que nos caracterice por a excelencia
                                        y nos diferencie de la competencia </li>
                                </ul>
                          </div>
                        </div>
                    </div>
                    <div class="card">
                        <div class="card-header" id="headingThree">
                            <h2 class="mb-0">
                                <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                    Misión
                                  </button>
                            </h2>
                        </div>
                        <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
                            <div class="card-body">
                            Alimentar a los clientes y consumidores con productos saludable, sabrosos y de alta calidad

                            </div>
                        </div>
                    </div>
                    <div class="card">
                        <div class="card-header" id="headingFour">
                            <h2 class="mb-0">
                                <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                    Visión
                                  </button>
                            </h2>
                        </div>
                        <div id="collapseFour" class="collapse" aria-labelledby="headingFour" data-parent="#accordionExample">
                            <div class="card-body">
                            Ser reconocidas como una de las mayores empresas en el sector alimentario, 
                            posicionándonos estratégicamente y aspirando a transformar la industria 
                            alimentaria en un negocio socialmente responsable, saludable, transparente 
                            y sostenibles gracias a que satisfacemos las diversas necesidades del 
                            consumidor todos los días siendo líderes de productos confiables.
                            </div>
                        </div>
                    </div>
                </div>
                <Link className="btn btn-warning mt-2" to="home" role="button">Regresar</Link>
            </div>
        )
    }
}

export default Somos;