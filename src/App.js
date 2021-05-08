import React, { Component } from 'react';
import './App.css'
import Header from './componentes/inicio/header';
import Headerv2 from './componentes/inicio/headerv2';
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
        <Header />
        <Route path='/home' exact component={Home}/>
        <div className="container-fluid">
<<<<<<< HEAD
          <Headerv2 />
          <br></br>
          <Route path='/home' exact component={Home} />
          <Route path='/menu' exact component={Menú} />
=======
          <Route path='/home' exact component={Home}/>
          <Route path='/menu' exact component={Menú}/>
>>>>>>> dddc22bf19c82cb971ac4e35c153842a59618089
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