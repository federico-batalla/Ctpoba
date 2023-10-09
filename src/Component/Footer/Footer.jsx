import React from 'react';
import './Footer.css'
import Logo from './logobyn.png'

const Footer = () => {
    return (
      <>
        <footer>
            <div className="contenedor">
                <div className='graficos'>
                    <div className='logo'>
                        <img src={Logo} alt="" />
                    </div>
                    <div className="redes-sociales">
                        
                    </div>
                </div>
                <div className='datos'>

                </div>
                <div className='contacto'>

                </div>
            </div>
        </footer>
      </>
    );
};

export default Footer;