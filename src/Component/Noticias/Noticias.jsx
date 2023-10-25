import React from 'react';
import './Noticias.css'


const Noticias = ({ articulos }) => {

    return (
        
            <div className='article-list'>
                {articulos.map(articulo => (
                    <div className="article-container" key={articulo.id}>
                        <div className="img-container">
                            <img src={articulo.image} alt={articulo.tittle} />
                        </div>
                        <div className="article-body">
                            <h2>{articulo.tittle}</h2>
                            <p>{articulo.description}</p>
                            <div className="article-footer">
                                <span>{articulo.date}</span>
                            </div>
                        </div>
                    </div>
                ))}


            </div>
        
    )
};

export default Noticias;