import React from 'react';
import Dpto from '../Dpto/Dpto';
import './PagDpto.css';
import alcance from '../../imagenes/alcance.png';
import electro1 from '../../imagenes/electro1.png';
import elecro from '../../imagenes/electro.png'

const PagDtpo = ({ seccion }) => {
    return (
        <div className="Pagdpto">
            <div className="contenedor">
                <div className="titulo">
                    <h2>{seccion}</h2>
                   <div className='contenedorPerfil'>
                    <Dpto img ={elecro} titulo = 'Identificacion del titulo' src = '/Identificacion-del-titulo'/>
                    <Dpto img ={electro1} titulo = 'Referencia al Perfil Profesional' src = '/Referencia-al-Perfil-Profesional' />
                    <Dpto img ={alcance} titulo = 'Area Ocupacional' src = '/Area-Ocupacional'/>
                   </div>
                </div>

            </div>
        </div>
    );
};

export default PagDtpo;