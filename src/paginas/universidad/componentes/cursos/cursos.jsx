import React from 'react';
import './cursos.css';


const CursosNombre = (cursonom) => {
    return(
        <div className="nombre-curso-contenedor"> 
            {cursonom.nombreCurso}  
        </div>
    );

}

export default CursosNombre;