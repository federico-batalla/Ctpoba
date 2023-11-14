import React from 'react';
import Banner from '../Banner/Banner.jsx'
import Departamentos from '../Departamentos/Departamentos.jsx'
import Noticias from '../Noticias/Noticias.jsx';
import NoticiasDer from '../NoticiasDer/NoticiasDer.jsx';
import salon from '../../imagenes/anfiteatro.jpg';
const Main = () => {
    return (
      <>
      <Banner/>
      <Departamentos />
      <Noticias />
      <NoticiasDer />

      </>
    );
};

export default Main;