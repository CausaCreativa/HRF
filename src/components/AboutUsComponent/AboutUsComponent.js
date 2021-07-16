import React from 'react'
import { BackgroundTop } from '../PanelService/PanelService.elements'
import {Container, 
        TitleContainer,
        ContentAbout,
        TextAbout
        // Container,
        // BackgroundTop,
        // Title,
        // Image,
        // ContentImage,
        // ContentText,
        // Text,
        // ContentText2,
        // Text2
    } from './AboutUsComponent.elements'


const AboutUsComponent = ({
    Background
}) => {
    return (
        <>
<Container Background={Background[1]}>
    <TitleContainer>
        <h1>  ¿QUIENES SOMOS? </h1>
    </TitleContainer>
    <ContentAbout>
        <img src={Background[12]}/>
    <TextAbout>
        <p>
        En HRF asociados estamos enfocados en resolver las diferentes situaciones fácticas de nuestros clientes en ámbitos contables, financieras y legales, esto mediante el estudio, diseño y ejecución de planes gestionados por nuestro equipo de trabajo multidisciplinario, lo que nos permite encauzar la solución a la necesidad real del cliente, ofreciendo escenarios y acciones encaminadas a la optimización de procesos y la mitigación de riesgos en las diferentes áreas de enfoque.
        </p>

    </TextAbout>

    </ContentAbout>
</Container>
        </>
    )
}

export default AboutUsComponent
