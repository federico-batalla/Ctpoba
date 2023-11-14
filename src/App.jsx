import React, {  useState }  from 'react';
import Header from './Component/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Main from './Component/Main/Main';
import Footer from './Component/Footer/Footer';

import PagDtpo from './Component/PagDpto/PagDtpo';
import Institucional from './Component/Institucional/Institucional';
import data from './Data/Data';






function App() {

  const [articulos, setArticulos] = useState(data);




  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Main articulos={articulos} />} />
        <Route path='/Programacion' element={<PagDtpo seccion='Programacion' />} />
        <Route path='/Electromecanica' element={<PagDtpo seccion='Electromecanica' />} />
        <Route path='/Electronica' element={<PagDtpo seccion='Electronica' />} />
        <Route path='/GYAO' element={<PagDtpo seccion='Gestion de Organizaciones' />} />
        <Route path='/MMO' element={<PagDtpo seccion='Maestro Mayor de Obras' />} />
        <Route path='/Institucional' element={<Institucional />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;