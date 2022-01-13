import React from 'react';
import './Estilos.css'
import './Estilos.scss'
import moduleStyles from './Estilos.module.css';

export default function Estilos (){
    let myStyles = {
        borderRadius:".5rem",
        margin: "2rem auto",
        maxWidth: "50%"
    }

    return(
        <section className="estilos">
            <h2>Estilos en React</h2>
            <h3 className='bg-react'>Estilo desde hoja CSS externa</h3>
            <h3 className='bg-react' style={{borderRadius:".25rem", margin: "1rem"}}>Estilo desde el atributo style</h3>
            <h3 className='bg-react' style={myStyles}>Estilo desde un objeto</h3>
            <h3 className='bg-react' style={myStyles}>Agregando Normaliza (@impot-normalize)</h3>
            <h3 className={moduleStyles.error}>Estilos desde módulos</h3>
            <h3 className={moduleStyles.success}>Estilos desde módulos</h3>
            <h3 className='bg-sass'>Estilos desde Sass</h3>
        </section>
    )
}
