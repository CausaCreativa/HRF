import React from 'react'
import {ContainerBackgroundTop,BackgroundTop,Title} from './Values.elements'
import {BackgroundAboutUsThree} from '../../pages/AboutUs/DataAboutUs'


const Values = () => {
    return (
        <>
           <ContainerBackgroundTop>
            <BackgroundTop {...BackgroundAboutUsThree}>
                <Title>Valores</Title>
            </BackgroundTop>
            </ContainerBackgroundTop>
        </>
    )
}

export default Values
