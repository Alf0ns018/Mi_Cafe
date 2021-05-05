import React, { Component } from 'react';
import './App.css'
import Header from './componentes/inicio/header';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './pages/Home';
import InicioS from './componentes/formularios/InicioSesion';
import Registro from './componentes/formularios/formuperso';
import Conocenos from './pages/Conocenos';
import Menú from './pages/Menu';
import Footer from './componentes/footer/footer'


class App extends Component {
  render() {
    return (
      <Router>
        <div className="container-fluid">
          <Header />
          <br></br>
          <Route path='/home' exact component={Home} />
          <Route path='/menu' exact component={Menú} />
          <Route path='/conocenos' exact component={Conocenos} />
          <Route path= '/iniciars'exact component={InicioS}/>
          <Route path= '/regis'exact component={Registro}/>
          <br></br>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;