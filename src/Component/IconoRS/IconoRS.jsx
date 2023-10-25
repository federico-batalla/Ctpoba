import React from 'react';
import './IconoRS.css'


const IconoRS = ({logo,src}) => {
    return (
        <div className="contenedorRS">
            <a href={src} target='_blank' rel='noopener noreferrer'>{logo}</a>
        </div>
    );
};

export default IconoRS;