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
    alt
}) => {
    return (
        <>
            <HeroContainer>
                <HeroImage alt={alt} />
                <HeroSvg/>
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