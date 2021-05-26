import React from 'react'
import {
    HeroContainer,
    HeroImage,
    HeroBanner,
    HeroSvg,
    HeroTitle
    }
    from './Hero.elements'

export const Hero = ({
    banner,
    title,
    alt,
    vector,
    hero,
    viewHeight
}) => {
    return (

        <>
            <HeroContainer viewHeight={viewHeight}>
                <HeroImage alt={alt} hero={hero} />
                <HeroSvg vector={vector}/>
                <HeroTitle>
                    {title}
                </HeroTitle>
                <HeroBanner>
                    {banner}
                </HeroBanner>
            </HeroContainer>
        </>
    )
}

export default Hero