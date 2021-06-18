import React from 'react'
import {ContainerBackgroundTop,BackgroundTop,Title} from './Values.elements'



const Values = ({
    Background
}) => {
    return (
        <>
           <ContainerBackgroundTop>
            <BackgroundTop Background={Background[2]}>
                <Title>Valores</Title>
            </BackgroundTop>
            </ContainerBackgroundTop>
        </>
    )
}

export default Values
