import React from 'react';

import { NavLink , Route , Routes} from 'react-router-dom';

const Header = () => {
    return (
        <>
            <h1>header</h1>
            <nav>
                <NavLink to="/">Institucional</NavLink>
                <NavLink to="/contacto">contatco</NavLink>
                <NavLink to="/acerca-de">Acerca-de</NavLink>
            </nav>

        </>
    );
};

export default Header;