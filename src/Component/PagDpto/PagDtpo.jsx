import React from 'react';
import './PagDpto.css'

const PagDtpo = ({ seccion }) => {
    return (
        <div className="Pagdpto">
            <div className="contenedor">
                <div className="titulo">
                    <h2>{seccion}</h2>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium repudiandae voluptates officiis optio iusto aliquid fugit eos illum facilis, hic quia sunt libero mollitia possimus distinctio alias quis sapiente iste!</p>
                </div>

            </div>
        </div>
    );
};

export default PagDtpo;