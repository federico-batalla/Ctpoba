import React from 'react';
import { NavLink } from 'react-router-dom';
import { RxCaretDown } from "react-icons/rx";


import './Nav.css';

const Nav = () => {
    return (
        <nav >

            <ul className="menu-horizontal">
                <li><NavLink  to="/">Home</NavLink></li>
                <li className='borde'>
                    <NavLink  to="/Institucional">Institucional <RxCaretDown /> </NavLink>
                    <ul className='menu-vertical'>
                        <li><NavLink  to="/Documentacion">Marco Legal </NavLink></li>
                        <li><NavLink to="/Novedades">Autoridades </NavLink></li>
                        <li><NavLink  to="/Contacto">Departamentos </NavLink></li>
                    </ul>

                </li>
                <li className='borde'>
                    <NavLink  to="/Institucional">Documentacion <RxCaretDown /> </NavLink>
                    <ul className='menu-vertical'>
                        <li><NavLink  to="/Documentaciono">Diseño Curricular</NavLink></li>
                        <li><NavLink  to="/Novedades">Plan de Estudio Ciclo Basico</NavLink></li>
                        <li><NavLink  to="/Contacto">Plan de Estudio Ciclo Superior</NavLink></li>
                    </ul>

                </li>
                <li><NavLink  to="/Institucional">Contacto</NavLink></li>
            </ul>



        </nav>
    );
};

export default Nav;