import React from 'react';
import Ingreso from '../Ingreso/Ingreso';
import { NavLink } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <>
            <header>
                <div className='contenedor'>
                    <Ingreso />
                    <p>menu</p>
                    <nav>
                        <NavLink to="/">Home</NavLink>
                        <NavLink to="/Institucional">Institucional</NavLink>
                        <NavLink to="/Documentaciono">Documentacion</NavLink>
                        <NavLink to="/Novedades">Novedades</NavLink>
                        <NavLink to="/Contacto">Contacto</NavLink>
                    </nav>

                </div>

            </header>


        </>
    );
};

export default Header;