import React from 'react';
import './Departamentos.css';
import Dpto from '../Dpto/Dpto';
import Programacion from './programacion.png'
import Elec from './electromecanica.png'
import Eco from './economia.png'
import Electronica from './electronica.png'
import Obra from './obrero.png'

const Departamentos = () => {
    return (
        <>
            <div className="departamentos">
                <div className="contenedor">


                    <div className="contedordpto">
                        <Dpto img={Programacion} titulo='Programacion' src= '/Programacion'/>
                        <Dpto img={Elec} titulo='Electromecanica' src='/Electromecanica'/>
                        <Dpto img={Eco} titulo='Gestion de Organizaciones' src='/GYAO'/>
                        <Dpto img={Electronica} titulo='Electronica' src='/Electronica'/>
                        <Dpto img={Obra} titulo='Maestro Mayor de Obra'src='/MMO' />

                    </div>
                </div>
            </div>
        </>
    );
};

export default Departamentos;