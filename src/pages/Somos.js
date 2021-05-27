import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../Estilos/Somos.css';

class Somos extends Component {
    render() {
        return (
            <div>

                <div class="accordion text-center" id="accordionExample">
                    <div class="tarje">
                        <div class="card-header" id="headingOne">
                            <h2 class="mb-0">
                                <button class="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                    ¿Quienes Somos?
                                </button>
                            </h2>
                        </div>

                        <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
                            <div class="card-body">

                                <p align="justify"> 
                                Todo empezó con un sueño:
                                <br></br>
                                <br></br>
                                Un día, estos visionarios emprendedores Tabasqueños, José y Alfonso, decidieron abrir un local de comida rápida.
                                La idea, desde luego, era innovadora y atractiva en sí misma, pero además el establecimiento tenía dos características 
                                importantes que lo convirtieron en todo un éxito y ayudaron a lanzar el concepto de comida: los platos eran baratos 
                                y sobre todo el “servicio” era rápido. Así nació el primer puesto de comida.
                                <br></br>
                                El primer establecimiento se abrió en la primavera, ya que esta temporada es la mejor época del año porque muchos 
                                de los productos de temporada, concretamente las futas, se pueden disfrutar tal cual y sin necesidad de cocción, que 
                                es como más ricos están. Pero otros solo los podemos comer después de haberlos cocinado.
                                En el transcurso del tiempo, se aprendieron los conceptos básicos del manejo de una compañía, así como la importancia 
                                de servir un producto bien preparado y de alta calidad, el brindar un servicio excelente al cliente, de mantener bajos 
                                costos de operación.
                                <br></br>
                                Una de las características que nos destaca es especialmente por la velocidad con la que se ofrece el servicio, por lo 
                                cual en este sector de la industria alimentaria que se ha consolidado en los últimos años. De hecho, cada vez hay 
                                más variedad en las ofertas de productos que se alinean perfectamente con las necesidades de los clientes y que la 
                                hacen más atractiva para los consumidores.
                                <br></br>
                                Por ello para ofrecer un producto de calidad es esencial seguir las reglas de este tipo de negocio e implementar 
                                servicios de vanguardia. Asimismo, contar con los equipos que te permitan optimizar el procesamiento de los alimentos.
                                <br></br>
                                Posteriormente se unieron José David, Lanser Manuel y Edgar Fermín.
                                </p>

                             </div>
                        </div>
                    </div>
                    <div class="tarje">
                        <div class="card-header" id="headingTwo">
                            <h2 class="mb-0">
                                <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                    Metas
                                  </button>
                            </h2>
                        </div>
                        <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
                            <div class="card-body">

                            <p align="justify">
                                    Ofrecer un servicio y una calidad de productos que nos caracterice por la excelencia
                                        y nos diferencie de la competencia 
                                </p>

                            </div>
                        </div>
                    </div>
                    <div class="tarje">
                        <div class="card-header" id="headingThree">
                            <h2 class="mb-0">
                                <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                    Misión
                                  </button>
                            </h2>
                        </div>
                        <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
                            <div class="card-body">

                            <p align="justify">
                                Alimentar a los clientes y consumidores con productos saludable, sabrosos y de alta calidad
                            </p>

                            </div>
                        </div>
                    </div>
                    <div class="tarje">
                        <div class="card-header" id="headingFour">
                            <h2 class="mb-0">
                                <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                    Visión
                                  </button>
                            </h2>
                        </div>
                        <div id="collapseFour" class="collapse" aria-labelledby="headingFour" data-parent="#accordionExample">
                            <div class="card-body">

                            <p align="justify">
                                Ser reconocidas como una de las mayores empresas en el sector alimentario,
                                posicionándonos estratégicamente y aspirando a transformar la industria
                                alimentaria en un negocio socialmente responsable, saludable, transparente
                                y sostenibles gracias a que satisfacemos las diversas necesidades del
                                consumidor todos los días siendo líderes de productos confiables.
                            </p>

                            </div>
                        </div>
                    </div>
                    <Link className="btn btn-warning mt-2" to="home" role="button">Regresar</Link>
                </div>
              
            </div>
        )
    }
}

export default Somos;