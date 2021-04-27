import React, { Component } from 'react';
import './App.css'
import Header from './componentes/inicio/header';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './pages/Home';
import Formu from './componentes/formularios/formuperso';
import Sesión from './componentes/formularios/InicioSesion';


class App extends Component {
  render() {
    return (
      <Router>
        <div className="container-fluid">
          <Header />
          <Route path='/' exact component={Home} /> 
          <Route path='/formu' exact component={Formu}/>
          <Route path='/sesion' exact component={Sesión}/>
        </div>
      </Router> 
    );
  }
}

export default App;