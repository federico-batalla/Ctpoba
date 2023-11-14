import React from 'react';
import './Institucional.css'

const Institucional = () => {
    return (
        <div>
            <div className='institucional'>
                <div className='contenedor'>
                    <div className='titulo'>
                        <h2>Institucional</h2>
                    </div>

                </div>

            </div>

            <div className="cont-titulo">
                <div className="contenedor">
                    <h3>Autoridades</h3>
                    <div className='contenido'>
                        <p><span className='resaltar'>Director/a:</span> Prof. Maria Villagran</p>
                        <p><span className='resaltar'>Vicedirector/a Turno Mañana:</span> Prof. Omar Richini</p>
                        <p><span className='resaltar'>Vicedirector/a Turno Tarde:</span> Prof. Cesar Ballan</p>
                        <p><span className='resaltar'>Vicedirector/a Turno Vespertino:</span> Prof. Gisell Bertotto</p>
                    </div>

                </div>
            </div>

        </div>


    );
};

export default Institucional;