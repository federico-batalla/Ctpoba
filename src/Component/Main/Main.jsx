import React from 'react';
import Banner from '../Banner/Banner.jsx'
import Departamentos from '../Departamentos/Departamentos.jsx'
import Noticias from '../Noticias/Noticias.jsx';
import NoticiasDer from '../NoticiasDer/NoticiasDer.jsx';

import './Main.css'

const Main = ({ articulos }) => {

  return (
    <>


      <Banner />

      <Departamentos />
      <div className="contenedor">
        <div className="noticias">
          <Noticias articulos={articulos} />
          <NoticiasDer />
        </div>
      </div>




    </>
  );
};

export default Main;