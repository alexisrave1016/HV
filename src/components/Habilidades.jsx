import React from 'react';
import { ContainerHab } from '../styled/HabilidadesContainer';


export const Habilidades=() =>{
    return (
        <ContainerHab>
        <div className="container_Hab">
            <div className="barra_progreso">
                <h4>HTML</h4>
                <div></div>
            </div>

            <div className="barra_progreso">
                <h4>CSS</h4>
                <div></div>
            </div>

            <div className="barra_progreso">
                <h4>JavaScript</h4>
                <div></div>
            </div>

            <div className="barra_progreso">
                <h4>ReactJS</h4>
                <div></div>
            </div>
        </div>
        </ContainerHab>
    )
}
