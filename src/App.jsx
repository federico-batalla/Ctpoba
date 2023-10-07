import React from 'react';
import Header from './Component/Header/Header';
import {Route, Routes } from 'react-router-dom';
import Main from './Component/Main/Main';
import Footer from './Component/Footer/Footer';


const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Main />} />

      </Routes>
      <Footer />
    </div>
  );
};

export default App;