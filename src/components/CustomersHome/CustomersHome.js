import React from 'react'

import {CustomersHomeElements,HeroSvg, ContainerTitle, Title, Subtitle, ContianerSlider, ContainerImage, SliderContainer, ImageBg

} from './CustomersHome.elements'


const CustomersHome = ({
    vector, imagen}
) => {
    return (
        <>
            <CustomersHomeElements>
                <HeroSvg vector={vector}/>
                <ContainerTitle>
                    <Title>
                        Clientes
                    </Title>
                    <Subtitle>
                    Ellos han confiado en nuestros procesos.
                    </Subtitle>
                </ContainerTitle>
                <ContianerSlider>
                    <ContainerImage>
                        <img src={imagen}  alt=" customer imagen"/>
                    </ContainerImage>
                    <ImageBg/>
                    <SliderContainer>
                    </SliderContainer>
                </ContianerSlider>


            </CustomersHomeElements>
        </>
    )
}

export default CustomersHome
