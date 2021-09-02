import React from 'react'
import { H2Styled } from '../styled/H2Styled'
import {Container} from '../styled/EducationContainer'

export const Education = () => {
    return (

        <div>
             <Container>
             <H2Styled name= "Mis Estudios"/>
                <div className="Education-item">
                    <h1>SENA - <span>2017</span>
                        <p>Tecnologo electronico e Instrumental Industrial</p>
                    </h1>
                </div>
            </Container>  
        </div>
    )
}


