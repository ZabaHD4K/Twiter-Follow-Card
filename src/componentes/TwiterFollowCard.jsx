import { useState } from 'react';
import React from 'react';
import './App.css'; 

export function TwitterFollowCard({ nombre_usuario, arroba, avatar, isFollowing: initialIsFollowing, dificultad }) {
    
    // Estado para isFollowing
    const [isFollowing, setIsFollowing] = useState(initialIsFollowing); 
    
    // Maneja el estado de seguir/dejar de seguir
    const handleButtonClick = () => {
        setIsFollowing(!isFollowing); 
    };

    // Texto y estilos del botón según el estado de isFollowing
    const text = isFollowing ? 'Siguiendo' : 'Seguir'; 
    const botonid = isFollowing ? 'boton-siguiendo' : 'boton-no-siguiendo'; 


    // ejeplo de practica
    const [esmajo,setIsMajo] = useState(false);
    const botonmajo = () => {
        setIsMajo(!esmajo);
    };
    const caracter = esmajo ? 'majete' : 'no-majete';

    


    
    return (
        <article id='cabecera'>
            <header>  
                <img 
                    id='foto' 
                    alt={`el avatar de ${nombre_usuario}`} 
                    src={avatar}
                />

                <div id='nombre_usuario'>
                    <strong id='nombre'>{nombre_usuario}</strong>
                    <span id='arroba'>{arroba}</span>
                </div>
                
                <aside>
                    <button id={botonid} onClick={handleButtonClick}>
                        {text}
                    </button>
                </aside>
            </header>

        {/* boton de ejemplo para prbar prop y state*/ }
            <button  onClick={botonmajo}>{caracter}</button>
        </article>
    );
}
