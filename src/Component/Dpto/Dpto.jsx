import React from 'react';
import './Dpto.css'


const Dpto = ({ img, titulo }) => {
    return (
        <>
            <div className='Dpto'>

                <div className="contimg">
                    <img src={img} alt="" />
                </div>
                <div className="contitulo">
                    <h2>{titulo}</h2>
                </div>
            </div>

        </>
    );
};

export default Dpto;