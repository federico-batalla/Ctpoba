import React from 'react';
import Banner from '../Banner/Banner.jsx'
import Departamentos from '../Departamentos/Departamentos.jsx'
import Noticias from '../Noticias/Noticias.jsx';
import NoticiasDer from '../NoticiasDer/NoticiasDer.jsx';

const Main = ({articulos}) => {

    return (
      <>

      
      <Banner/>
      <Departamentos />
      <Noticias articulos = {articulos}/>
      <NoticiasDer />
      

      </>
    );
};

export default Main;