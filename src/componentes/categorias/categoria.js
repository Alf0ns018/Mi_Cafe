import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Categoria extends Component {
    render() {
        return (

            <div className="container servicios">
 
            <div className="row">
 
                <div className="col-lg-4">
                    <svg className="bd-placeholder-img rounded-circle" width="140" height="140" xmlns="https://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: 140x140">
                        <title>Placeholder</title>
                        <img src="https://scontent.fvsa2-1.fna.fbcdn.net/v/t1.6435-9/118792238_2631606700486005_1955948845830958695_n.jpg?_nc_cat=109&ccb=1-3&_nc_sid=8bfeb9&_nc_eui2=AeG3Dr5KmiKRlzFGYsJPe6PFmAXmPOksc06YBeY86SxzTugSHqSn_4Al9ML-fGfewphwV3B6H8dmlEFZB_ipk7lF&_nc_ohc=8Ak6J_Ge6d4AX-Rp1be&_nc_ht=scontent.fvsa2-1.fna&oh=88cbf1cbf98ed8527d8e3dd5e9e592bb&oe=60B96C79" class="d-block w-100" alt="..."></img>
                        <rect width="100%" height="100%" fill="#777" />
                        <text x="50%" y="50%" fill="#777" dy=".3em">140x140</text>
                    </svg>
                    <h2>Alitas</h2>
                    <p><Link className="btn btn-secondary" to="alitas" role="button">Ver más &raquo;</Link></p>
                </div>
 
                <div className="col-lg-4">
                    <svg className="bd-placeholder-img rounded-circle" width="140" height="140" xmlns="https://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: 140x140">
                        <title>Placeholder</title>
                        <rect width="100%" height="100%" fill="#777" />
                        <text x="50%" y="50%" fill="#777" dy=".3em">140x140</text>
                    </svg>
                    <h2>Hamburguesas</h2>
                    <p><Link className="btn btn-secondary" to="hamburguesa" role="button">Ver más &raquo;</Link></p>
                </div>
 
                <div className="col-lg-4">
                    <svg className="bd-placeholder-img rounded-circle" width="140" height="140" xmlns="https://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: 140x140">
                        <title>Placeholder</title>
                        <rect width="100%" height="100%" fill="#777" />
                        <text x="50%" y="50%" fill="#777" dy=".3em">140x140</text>
                    </svg>
                    <h2>Frapes</h2>
                    <p><Link className="btn btn-secondary" to="frape" role="button">Ver más &raquo;</Link></p>
                </div>
 
            </div>
 
        </div>
 
    )
    
  }
 
}

export default Categoria;