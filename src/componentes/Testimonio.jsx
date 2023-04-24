import React from 'react';
import '../hojas-de-estilos/Testimonio.css';

export function Testimonio(props) {
    return (
        <div className='contenedor-testimonio'>
            <img className='imagen-1' src={require(`../imagenes/foto-${props.imagen}.png`)} alt='imagen de mujer' />
            <div className='contenedor-text-testimonio'>
                <p className='nombre-mujer-pais'><strong> {props.nombre}</strong> en {props.pais} </p>
                <p className='cargo-testimonio'>{props.cargo} en {props.empresa}</p>
                <p className='texto-testimonio'>{props.testimonio}</p>
            </div>
        </div>
    );
}
