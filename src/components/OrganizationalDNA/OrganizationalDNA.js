import React from 'react'
import {ContainerBackgroundTop,BackgroundTop,Title} from './OrganizationalDNA.elements'
import {BackgroundAboutUsTwo} from '../../pages/AboutUs/DataAboutUs'


const OrganizationalDNA = () => {
    return (
        <>
            <ContainerBackgroundTop>
                <BackgroundTop {...BackgroundAboutUsTwo}>
                    <Title>ADN Organizacional</Title>
                </BackgroundTop>
            </ContainerBackgroundTop>
        </>
    )
}

export default OrganizationalDNA
