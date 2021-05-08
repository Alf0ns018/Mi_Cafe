import React, { Component } from 'react';
import '../../Estilos/slide.css'


class Slide extends Component {
    render() {
        return (    
            <div id="carouselExampleCaptions" class="carousel slide" data-ride="carousel">
                <ol class="carousel-indicators">
                    <li data-target="#carouselExampleCaptions" data-slide-to="0" class="active"></li>
                    <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
                    <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
                </ol>

                <div class="carousel-inner">
                    
                    <div class="carousel-item active">
                        <img src="https://scontent.fvsa2-1.fna.fbcdn.net/v/t1.6435-9/118792238_2631606700486005_1955948845830958695_n.jpg?_nc_cat=109&ccb=1-3&_nc_sid=8bfeb9&_nc_eui2=AeG3Dr5KmiKRlzFGYsJPe6PFmAXmPOksc06YBeY86SxzTugSHqSn_4Al9ML-fGfewphwV3B6H8dmlEFZB_ipk7lF&_nc_ohc=8Ak6J_Ge6d4AX-Rp1be&_nc_ht=scontent.fvsa2-1.fna&oh=88cbf1cbf98ed8527d8e3dd5e9e592bb&oe=60B96C79" class="d-block w-100" alt="..."></img>
                            <div class="carousel-caption d-none d-md-block">
                                <h5><strong>Hola</strong></h5>
                                <p className="texto1">Some representative placeholder content for the first slide.</p>
                            </div>
                    </div>

                    <div class="carousel-item">
                        <img src="https://scontent.fvsa2-1.fna.fbcdn.net/v/t1.6435-9/118807962_2631606337152708_1962655906979966032_n.jpg?_nc_cat=107&ccb=1-3&_nc_sid=8bfeb9&_nc_eui2=AeFIt_SFzG3xDA4HYy1EkfpBENuIY0EjIWcQ24hjQSMhZz-_aoxoqL5D4XgFPRysT_05r-rLgBPxDxV-QDg2Y5VA&_nc_ohc=TPNNTG7BetsAX86As9I&_nc_ht=scontent.fvsa2-1.fna&oh=91636d5c5ce9ae2547d6ac636fddd5d0&oe=60B768EA" class="d-block w-100" alt="..."></img>
                            <div class="carousel-caption d-none d-md-block">
                                <h5>Second slide label</h5>
                                <p className="texto2">Some representative placeholder content for the second slide.</p>
                            </div>
                    </div>

                    <div class="carousel-item">
                        <img src="https://scontent.fvsa2-1.fna.fbcdn.net/v/t1.6435-9/107832558_2581718758808133_4716605109706891339_n.jpg?_nc_cat=104&ccb=1-3&_nc_sid=8bfeb9&_nc_eui2=AeFQCXGia2Z7UrlXUNpaZZCK_kYO9Nx3nI_-Rg703Hecj4TVJdvRpTafA-xrYw41M3Avl2BmDGj2SUMl2BaF_3rG&_nc_ohc=jc_UoslkswEAX9fyLH0&_nc_ht=scontent.fvsa2-1.fna&oh=6b0c556b6749de2f036c3b0d90acb9bf&oe=60B9BF71" class="d-block w-100" alt="..."></img>
                            <div class="carousel-caption d-none d-md-block">
                                <h5>Third slide label</h5>
                                <p className="texto3">Some representative placeholder content for the third slide.</p>
                            </div>
                    </div>
                </div>
            
                <a class="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="sr-only">Previous</span>
                </a>
                
                <a class="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="sr-only">Next</span>
                </a>
            </div>

        )
    }
}

export default Slide;