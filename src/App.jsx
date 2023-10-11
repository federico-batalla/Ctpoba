import React from 'react';
import Header from './Component/Header/Header';
import {Route, Routes } from 'react-router-dom';
import Main from './Component/Main/Main';
import Footer from './Component/Footer/Footer';
import PagDtpo from './Component/PagDpto/PagDtpo';



const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/Programacion' element={<PagDtpo seccion='Programacion' />} />
        <Route path='/Electromecanica' element={<PagDtpo seccion='Electromecanica' />} />
        <Route path='/Electronica' element={<PagDtpo seccion='Electronica' />} />
        <Route path='/GYAO' element={<PagDtpo seccion='Gestion de Organizaciones' />} />
        <Route path='/MMO' element={<PagDtpo seccion='Maestro Mayor de Obras' />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;