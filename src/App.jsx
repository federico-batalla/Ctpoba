import React from 'react';
import Header from './Component/Header/Header';
import { NavLink , Route , Routes} from 'react-router-dom';
import Institucional from './Component/Institucional/Institucional';


const App = () => {
  return (
    <div>
      <Header/>
      <Routes>
                <Route path='/' element={<Institucional/>}/>
                         
      </Routes>
    </div>
  );
};

export default App;