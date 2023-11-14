import React from 'react';
import './Noticias.css'


const Noticias = ({ articulos }) => {

    return (
<<<<<<< HEAD
        <div className="containerNoticias">
            <p>Noticias</p>
=======

        <div className='article-list'>
            {articulos.map(articulo => (
                <div className="article-container" key={articulo.id}>
                    <div className="img-container">
                        <img src={articulo.image} alt={articulo.tittle} />
                    </div>
                    <div className="article-body">
                        <h2>{articulo.tittle}</h2>
                        <div className="descripcion">
                            <p>{articulo.description}</p>
                        </div>

                        <div className="article-footer">
                            <span>{articulo.date}</span>
                        </div>
                    </div>
                </div>
            ))}


>>>>>>> fede
        </div>

    )
};

export default Noticias;