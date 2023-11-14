import React from 'react';
import './Dpto.css'
import { NavLink } from 'react-router-dom';


const Dpto = ({ img, titulo,src }) => {
    return (
        <>
            <div className='Dpto'>

                <div className="contimg">
                    <NavLink  to={src}><img src={img} alt="" /></NavLink>
                </div>
                <div className="contitulo">
                    <h2>{titulo}</h2>
                </div>
            </div>

        </>
    );
};

export default Dpto;