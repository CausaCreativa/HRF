import React from 'react'
import {ContainerBackgroundTop,BackgroundTop,Title} from './AboutUsComponent.elements'
import {BackgroundAboutUsOne} from '../../pages/AboutUs/DataAboutUs'


const AboutUsComponent = () => {
    return (
        <>
        <ContainerBackgroundTop>
        <BackgroundTop {...BackgroundAboutUsOne}>
        <Title> ¿QUIENES SOMOS? </Title>  
        </BackgroundTop>
        </ContainerBackgroundTop>
           
           <p>“La ley es la logica, sin pasión”

Aristoteles</p>
<img src="../../utils/images/team.jpg"></img>
        </>
    )
}

export default AboutUsComponent
