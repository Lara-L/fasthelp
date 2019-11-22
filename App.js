import React from 'react';
import home from './home.png';
import mensagem from './newmens.png';
import logout from './logout.png';
import profile from './profile.png'





export default class App extends React.Component{

    render() {
        return (
            <div className="container">
                <nav className="menu">
                    <div className="menu__center">
                        <ul className="menu__list">
                            <li className="menu__list-item"><a href="" className="menu__link "><h1 style={{backgroundImage: 'url(' + home + ')'}} className="home"></h1>Início</a></li>
                            <li className="menu__list-item"><a href="" className="menu__link"><h1 style={{backgroundImage: 'url(' + profile + ')'}} className="profile"></h1><span className="usuario">User</span></a></li>
                            <li className="menu__list-item2"><a href="" className="menu__link"><h1 style={{backgroundImage: 'url(' + logout + ')'}} className="logout"></h1><span className="sair">Sair</span></a></li>


                        </ul>
                    </div>
                </nav>
                    <a href=""><h1 style={{backgroundImage: 'url(' + mensagem + ')'}} className="novo_chamado"></h1></a>


            </div>


        );
    }

}