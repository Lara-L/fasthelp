import React from 'react';
//import from './inicio.css';
import {Link} from 'react-router-dom';
import Navbar from '../../componentes/navbar';
import ChamadoCard from '../../componentes/chamados-card/';
function Inicio() {
	return(
		<>
		<Navbar />
		<ChamadoCard />
		</>
		);
}

export default Inicio;