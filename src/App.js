import React, { Component } from "react";
import "../src/App.css";
import Headerv2 from "./componentes/inicio/headerv2";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home";
import InicioS from "./componentes/formularios/InicioSesion";
import Registro from "./componentes/formularios/formuperso";
import Somos from "./pages/Somos";
import Menú from "./pages/Menu";
import Footer from "./componentes/footer/footer";
import Alitas from "./pages/Categorias/Alitas/alitas";
import Hamburguesa from "./pages/Categorias/Hamburguesa/hamburguesa";
import Frape from "./pages/Categorias/Frapes/frapes";
<script
	src="https://kit.fontawesome.com/6ef0ee8bc2.js"
	crossorigin="anonymous"
></script>;

class App extends Component {
	render() {
		return (
			<Router>
				<switch>
					<Headerv2 />
					<Route path="/home" exact component={Home} />
					<Route exact path="/menu" component={Menú} />
					<Route path="/Quienes_Somos" exact component={Somos} />
					<Route path="/iniciars" exact component={InicioS} />
					<Route path="/regis" exact component={Registro} />
					<Route path="/Alitas" exact component={Alitas} />
					<Route path="/Hamburguesa" exact component={Hamburguesa} />
					<Route path="/Frape" exact component={Frape} />
					<Footer />
				</switch>
			</Router>
		);
	}
}

export default App;
