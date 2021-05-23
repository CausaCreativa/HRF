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
}) => {
    return (

        <>
            <HeroContainer>
                <HeroImage alt={alt} hero={hero} />
                <HeroSvg vector={vector}>
                </HeroSvg>
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