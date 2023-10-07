import React from 'react';

import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <>
            <p>header</p>
            <nav>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/Institucional">Institucional</NavLink>
                <NavLink to="/Documentaciono">Documentacion</NavLink>
                <NavLink to="/Novedades">Novedades</NavLink>
                <NavLink to="/Contacto">Contacto</NavLink>
            </nav>

        </>
    );
};

export default Header;