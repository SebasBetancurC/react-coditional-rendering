import React from 'react';
import './info-estudiantes.estilo.css';
import Femenino from '../imagenes/femenino.jpg';
import Masculino from '../imagenes/masculino.jpg';

const InfoEstudiante = (infoes) => {
    return(
        <div className="info-estudiante-contenedor">
            &nbsp; &nbsp; {infoes.estudiante.nombre}
            { //Verdadero
                infoes.estudiante.nota < 3
                ?
                <span className="nota-perdida">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;{infoes.estudiante.nota}&nbsp;</span>
                : //Falso
                <span>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;{infoes.estudiante.nota}</span>
            }

            {   //Verdadero
                infoes.estudiante.genero === 'Femenino'
                ?
                <span>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;{infoes.estudiante.genero} <img src={Femenino} width= "40px" height = "30px"/></span> 
                :
                <span>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;{infoes.estudiante.genero} <img src={Masculino} width= "25px" height = "30px"/></span>
            }
            
               

        </div>
    );

}

export default InfoEstudiante;