import React from 'react'

import {CustomersHomeElements,
        HeroSvg,
        ContainerTitle,
        Title,
        Subtitle,
        ContianerSlider,
        ContainerImage,
        SliderContainer,
        ImageBg,
        Slider,
        IconsC,
        LogoContainer

} from './CustomersHome.elements'


const CustomersHome = ({
    vector,
    imagen,
    iconos,
}
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
                        <Slider>
                            <IconsC>
                                <LogoContainer iconos={iconos[0]}/>
                                <LogoContainer iconos={iconos[0]}/>
                                <LogoContainer iconos={iconos[0]}/>
                                <LogoContainer iconos={iconos[0]}/>
                                <LogoContainer iconos={iconos[0]}/>
                            </IconsC>
                            <IconsC>
                                <LogoContainer iconos={iconos[0]}/>
                                <LogoContainer iconos={iconos[0]}/>
                                <LogoContainer iconos={iconos[0]}/>
                                <LogoContainer iconos={iconos[0]}/>
                                <LogoContainer iconos={iconos[0]}/>
                            </IconsC>
                        </Slider>
                    </SliderContainer>
                </ContianerSlider>


            </CustomersHomeElements>
        </>
    )
}

export default CustomersHome
