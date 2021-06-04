import React from 'react'
import {ContainerBackgroundTop,BackgroundTop} from './Values.elements'
import {BackgroundAboutUsThree} from '../../pages/AboutUs/DataAboutUs'


const Values = () => {
    return (
        <>
           <ContainerBackgroundTop>
            <BackgroundTop {...BackgroundAboutUsThree}>
            </BackgroundTop>
            </ContainerBackgroundTop>
        </>
    )
}

export default Values
