import React from 'react';
import BarraDeBusqueda from '../barra-buscar/barra-de-busqueda';
import TablaDeInfoEstudiantil from '../tabla-info-estudiantes/tabla-info-estudiantil';
import './filtro-universidad.style.css';


const FiltroUniversidad = () => {
    return(
        <div className = "contenedor-filtro-universidad">
            <div className = "titulo">
                UNIVERSIDAD
            </div>

            <BarraDeBusqueda/>
            <TablaDeInfoEstudiantil/>
        </div>
    );

}

export default FiltroUniversidad;