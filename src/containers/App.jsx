import React from 'react'
import styled from 'styled-components';
import About2 from '../components/About2';
import {Education} from '../components/Education'
import {Experiencia} from '../components/Experiencia';
import { Certificaciones } from '../components/Certificaciones';
import { Habilidades } from '../components/Habilidades';


const GlobalStyle = styled.div`
    body{
        font-family: 'Lato', sans-serif;
        margin: 0;
        padding: 0;
        background: #F5F5F5;
    }
    
`;

export const App = () => {
    return(
        <GlobalStyle>
        <About2 />
        <Education />
        <Experiencia />
        <Certificaciones />
        <Habilidades />
        </GlobalStyle>
    )
}
