import React, { Component } from 'react';
import './App.css'
import Headerv2 from './componentes/inicio/headerv2';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './pages/Home';
import InicioS from './componentes/formularios/InicioSesion';
import Registro from './componentes/formularios/formuperso';
import Somos from "./pages/Somos";
import Menú from './pages/Menu';
import Footer from './componentes/footer/footer'
import Alitas from './pages/Categorias/Alitas/alitas'
import Hamburguesa from './pages/Categorias/Hamburguesa/hamburguesa'
import Frape from './pages/Categorias/Frapes/frapes'
import pdf from './componentes/pdf'


class App extends Component {
  render() {
    return (
      
      <Router>
        <switch>
        <Route exact path= '/pdf' component={pdf}/>
        <div className="container-fluid">
          <Headerv2 />
          <br></br>
          <Route path='/home' exact component={Home} />
          <Route exact path='/menu' component={Menú} />
          <Route path='/Quienes_Somos' exact component={Somos} />
          <Route path= '/iniciars'exact component={InicioS}/>
          <Route path= '/regis'exact component={Registro}/>
          <Route path= '/Alitas'exact component={Alitas}/>
          <Route path= '/Hamburguesa'exact component={Hamburguesa}/>
          <Route path= '/Frape'exact component={Frape}/>
          
          <br></br>
          <Footer />
        </div>
        </switch>
      </Router>
      
    );
  }
}

export default App;