import React from 'react';
import Ingreso from '../Ingreso/Ingreso';
import './Header.css'
import Logo from './Logo CTPOBA.png'
import Nav from '../Nav/Nav';

const Header = () => {
    return (
        <>
            <div className="ingreso">
                <div className="contenedor">
                    <Ingreso />
                </div>

            </div>

            <header>
                <div className='contenedor header'>
                    <div className="contenedor-logo">
                        <img src={Logo} alt="" />
                        <p>"Formando Tecnicos desde 1947"</p>
                    </div>
                    
                    <Nav />
                    
                </div>

            </header>


        </>
    );
};

export default Header;