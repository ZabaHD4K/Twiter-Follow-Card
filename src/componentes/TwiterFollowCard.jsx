// TwitterFollowCard.js
import React from 'react';
import './App.css'; // Asegúrate de que el CSS esté disponible aquí si es necesario

export function TwiterFollowCard({ nombre_usuario, arroba, avatar }) {
    return (
        <article id='cabecera'>
            <header>
                <img 
                    id='foto' 
                    alt={`el avatar de ${nombre_usuario}`} 
                    src={avatar} // Directamente usa el prop `avatar`
                />

                <div id='nombre_usuario'>
                    <strong id='nombre'>{nombre_usuario}</strong>
                    <span id='arroba'>{arroba}</span>
                </div>
                <aside>
                    <button id="boton">Seguir</button>
                </aside>
            </header>
        </article>
    );
}
