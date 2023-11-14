import React from 'react';
import './Footer.css'
import Logo from './logobyn.png'
import { AiFillFacebook, AiFillInstagram, AiFillYoutube, AiOutlineCopyrightCircle } from "react-icons/ai";
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
                            <p className='resaltar'>Gdor. Paz 165 , Ushuaia, Tierra del Fuego</p>
                            <p>Horario de atencion Presencial</p>
                            <p>lunes a viernes de 8:00 Hs a 21:00 Hs</p>
                        </div>
                        <div className='contacto'>
                            <h2>Vias de Contacto</h2>
                            <p><span className='resaltar'>Atencion Telefonica:</span> Lunes a viernes 8hs a 21hs</p>
                            <p><span className='resaltar'>Telefono Fijo:</span> 2901 - 445660</p>
                            <p><span className='resaltar'>Correo Electronico Secretaria:</span> ctpobarko.sec@tdf.edu.ar</p>
                            <p>Solicitamos redacte un único correo, el mismo será derivado al sector correspondiente</p>
                        </div>
                    </div>

                </div>
                <div className="copyrigth">
                    <p><AiOutlineCopyrightCircle /> Copyright 2023, Batalla Federico - Elias Gomez</p>
                    
                </div>
            </footer>
        </>
    );
};

export default Footer;