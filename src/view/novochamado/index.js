import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import {Link} from 'react-router-dom';
import Navbar from '../../componentes/navbar';
import NewChamado from '../../componentes/chamadoform';
import firebase from '../../config/firebase';

function Chamado() {
	return(
		<>
			<Navbar />
			<NewChamado />
		</>
		
		);
}

export default Chamado;