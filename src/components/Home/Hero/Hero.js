import React from 'react'
import './Hero.css'
import { Link } from 'react-router-dom'
 

const Hero = () => {
    return (
        <div className='hero' id='hero-navigate'>
            <div className='hero-text'>
                <h1 className='hero-h1'>We Make Amazing Haircuts</h1>
                <div className='hero-para-div'>
                    <p className='hero-para'>
                    Desde 2015 nos dedicamos a mejorar la imagen de nuestros clientes.

                   Construimos un espacio en el mundo para que disfrutes y te sientas cómodo.

                   Queremos que Barbería Shop sea tu lugar donde, más allá de cambiar tu look,

                   puedas relajarte, disfrutar de una buena cerveza y encontrarte con amigos.
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
