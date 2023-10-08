import React from 'react';
import './Ingreso.css';
import { BsChevronRight } from "react-icons/bs";

const Ingreso = () => {
    return (
        <>
            
            <div className='contenedor-header'>
                
                <p> Gdor. Paz 165 , Ushuaia, Tierra del Fuego - ctpobarko.sec@tdf.edu.ar - 445660 </p>
                <div className="btningreso">
                    <button>Ingreso Alumnos <BsChevronRight /> </button>
                </div>
            </div>

        </>
    );
};

export default Ingreso;