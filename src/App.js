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
          <Route path='/home' exact component={Home} />
          <Route path='/menu' exact component={Menú} />
          <Route path='/conocenos' exact component={Conocenos} />
          <Route path= '/iniciars'exact component={InicioS}/>
          <Route path= '/regis'exact component={Registro}/>
<<<<<<< HEAD
          <br></br>
          <Footer />
=======

          <br></br>
          <Footer/>
>>>>>>> 2f3bec0b2f5dd37d302a9ea5b83005c3a4afcf88
        </div>
      </Router>
    );
  }
}

export default App;