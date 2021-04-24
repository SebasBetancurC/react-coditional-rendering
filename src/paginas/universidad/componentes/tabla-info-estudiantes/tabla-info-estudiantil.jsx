import React from 'react';
import CursosNombre from '../cursos/cursos';
import InfoEstudiante from '../info-estudiantes/info-estudiantes';
import './tabla-info-estudiantil.css';


const TablaDeInfoEstudiantil = () => {
    return(
        <div className = "contenedor-info-estudiantil"> 
            <CursosNombre nombreCurso = "Programación IV"/>
            <InfoEstudiante estudiante={{
                    nombre: "Lorena",
                    nota: "1.0",
                    genero: "Femenino"
            }}/>

            <InfoEstudiante estudiante={{
                    nombre: "Ariana",
                    nota: "2.0",
                    genero: "Femenino"
            }}/>

            <InfoEstudiante estudiante={{
                    nombre: "Sebas",
                    nota: "4.0",
                    genero: "Masculino"
            }}/>

            <InfoEstudiante estudiante={{
                    nombre: "Felipe",
                    nota: "4.0",
                    genero: "Masculino"
            }}/>

            <InfoEstudiante estudiante={{
                    nombre: "Julián",
                    nota: "3.0",
                    genero: "Masculino"
            }}/>

            <InfoEstudiante estudiante={{
                    nombre: "Juliet",
                    nota: "5.0",
                    genero: "Femenino"
            }}/>

            <CursosNombre nombreCurso = "Bases de Datos"/>

            <InfoEstudiante estudiante={{
                    nombre: "Nataly",
                    nota: "5.0",
                    genero: "Femenino"
            }}/>

            <InfoEstudiante estudiante={{
                    nombre: "Juanse",
                    nota: "4.5",
                    genero: "Masculino"
            }}/>

            <InfoEstudiante estudiante={{
                    nombre: "Andrés",
                    nota: "2.2",
                    genero: "Masculino"
            }}/>

            <InfoEstudiante estudiante={{
                    nombre: "Carlos",
                    nota: "3.9",
                    genero: "Masculino"
            }}/>

            <InfoEstudiante estudiante={{
                    nombre: "LauraS",
                    nota: "2.9",
                    genero: "Femenino"
            }}/>

            <InfoEstudiante estudiante={{
                    nombre: "Marina",
                    nota: "3.0",
                    genero: "Femenino"
            }}/>
           
            <CursosNombre nombreCurso = "Microcontroladores"/>

            <InfoEstudiante estudiante={{
                    nombre: "Tamara",
                    nota: "3.7",
                    genero: "Femenino"
            }}/>

            <InfoEstudiante estudiante={{
                    nombre: "Ximena",
                    nota: "2.9",
                    genero: "Femenino"
            }}/>

            <InfoEstudiante estudiante={{
                    nombre: "Richar",
                    nota: "4.2",
                    genero: "Masculino"
            }}/>

            <InfoEstudiante estudiante={{
                    nombre: "Andrea",
                    nota: "5.0",
                    genero: "Femenino"
            }}/>

            <InfoEstudiante estudiante={{
                    nombre: "Camilo",
                    nota: "3.8",
                    genero: "Masculino"
            }}/>

            <InfoEstudiante estudiante={{
                    nombre: "Samuel",
                    nota: "4.5",
                    genero: "Masculino"
            }}/>

            <InfoEstudiante estudiante={{
                    nombre: "Simona",
                    nota: "1.9",
                    genero: "Femenino"
            }}/>

            <InfoEstudiante estudiante={{
                    nombre: "RubénD",
                    nota: "2.0",
                    genero: "Masculino"
            }}/>


            


    
        </div>
    );

}

export default TablaDeInfoEstudiantil;