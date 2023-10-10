import React from 'react';
import { NavLink } from 'react-router-dom';
import { RxCaretDown } from "react-icons/rx";
import './Nav.css';

const Nav = () => {
    return (
        <nav >

            <ul className="menu-horizontal">
                <li><NavLink className='link' to="/">Home</NavLink></li>
                <li className='borde'>
                    <NavLink className='link' to="/Institucional">Institucional <RxCaretDown /> </NavLink>
                    <ul className='menu-vertical'>
                        <li><NavLink className='link' to="/Documentacion">Marco Legal </NavLink></li>
                        <li><NavLink className='link' to="/Novedades">Autoridades </NavLink></li>
                        <li><NavLink className='link' to="/Contacto">Departamentos </NavLink></li>
                    </ul>

                </li>
                <li className='borde'>
                    <NavLink className='link' to="/Institucional">Documentacion <RxCaretDown /> </NavLink>
                    <ul className='menu-vertical'>
                        <li><NavLink className='link' to="/Documentaciono">Diseño Curricular</NavLink></li>
                        <li><NavLink className='link' to="/Novedades">Plan de Estudio Ciclo Basico</NavLink></li>
                        <li><NavLink className='link' to="/Contacto">Plan de Estudio Ciclo Superior</NavLink></li>
                    </ul>

                </li>
                <li><NavLink className='link' to="/Institucional">Contacto</NavLink></li>
            </ul>



        </nav>
    );
};

export default Nav;