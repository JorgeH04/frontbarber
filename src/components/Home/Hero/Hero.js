import React from 'react'
import './Hero.css'
import { Link } from 'react-router-dom'
 

const Hero = () => {
    return (
        <div className='hero' id='hero-navigate'>
            <div className='hero-text'>
                <h1 className='hero-h1'>Los mejores cortes</h1>
                <div className='hero-para-div'>
                    <p className='hero-para'>
                    Desde 2015 nos dedicamos a mejorar la imagen de nuestros clientes.

                   Construimos un espacio en el mundo para que disfrutes.
                    </p>
                </div>
                <Link to='/appointment'>
                    <button className='hero-btn'>Turnos</button>
                </Link>
            </div>
        </div>
    )
}

export default Hero
