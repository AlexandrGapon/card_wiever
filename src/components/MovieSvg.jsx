import React from 'react'
import cl from '../styles/MovieSvg.module.css'
import svgPic from '../assets/img/movie.svg'

const MovieSvg = () => {
    return (
        <div className={cl.container}>
            <img src={svgPic} alt='Cover' />
        </div>
    )
}

export default MovieSvg