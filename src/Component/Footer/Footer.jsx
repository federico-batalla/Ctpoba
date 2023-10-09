import React from 'react';
import './Footer.css'
import Logo from './logobyn.png'
import { AiFillFacebook, AiFillInstagram, AiFillYoutube } from "react-icons/ai";
import IconoRS from '../IconoRS/IconoRS';


const Footer = () => {
    return (
        <>
            <footer>
                <div className="contenedor ">
                    <div className="cont-foot">
                        <div className='graficos'>
                            <div className='logo'>
                                <img src={Logo} alt="" />
                            </div>
                            <div className="redes-sociales">
                                <IconoRS logo=<AiFillFacebook /> src='https://www.facebook.com/' />
                                <IconoRS logo=<AiFillInstagram /> src='https://www.instagram.com/' />
                                <IconoRS logo=<AiFillYoutube /> src='https://www.youtube.com/' />
                            </div>
                        </div>
                        <div className='datos'>
                            <h2>Nuestro Colegio</h2>
                            <p>Gdor. Paz 165 , Ushuaia, Tierra del Fuego</p>
                            <p>Horario de atencion Presencial : de lunes a viernes de 8:00 Hs a 21:00 Hs</p>
                        </div>
                        <div className='contacto'>

                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;