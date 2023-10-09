import React from 'react';
import './Footer.css'
import Logo from './logobyn.png'
import { AiFillFacebook, AiFillInstagram,AiFillYoutube } from "react-icons/ai";
import IconoRS from '../IconoRS/IconoRS';


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
                        <IconoRS  logo = <AiFillFacebook/> src='https://www.facebook.com/'/>
                        <IconoRS  logo = <AiFillInstagram/> src = 'https://www.instagram.com/'/>
                        <IconoRS  logo = <AiFillYoutube/> src = 'https://www.youtube.com/' />
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