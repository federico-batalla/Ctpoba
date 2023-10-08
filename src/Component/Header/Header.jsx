import React from 'react';
import Ingreso from '../Ingreso/Ingreso';
import { NavLink } from 'react-router-dom';
import './Header.css'
import Logo from './Logo CTPOBA.png'
import { RxCaretDown } from "react-icons/rx";

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
                    </div>
                    
                        <nav className='contenedor-nav'>
                            <NavLink className='link' to="/">Home</NavLink>
                            <NavLink className='link'to="/Institucional">Institucional <RxCaretDown /> </NavLink>
                            <NavLink className='link'to="/Documentaciono">Documentacion <RxCaretDown /></NavLink>
                            <NavLink className='link'to="/Novedades">Novedades <RxCaretDown /></NavLink>
                            <NavLink className='link'to="/Contacto">Contacto <RxCaretDown /></NavLink>
                        </nav>
                    


                </div>

            </header>


        </>
    );
};

export default Header;