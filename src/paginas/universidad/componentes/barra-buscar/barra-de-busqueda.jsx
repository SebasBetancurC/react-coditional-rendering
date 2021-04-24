import React from 'react';
import './barra-de-busqueda.css';


const BarraDeBusqueda = () => {
    return(
        <div className = "contenedor-barra-de-busqueda"> 
            <input type = "text" placeholder = "Buscar estudiante"/>
        </div>
    );

}

export default BarraDeBusqueda;