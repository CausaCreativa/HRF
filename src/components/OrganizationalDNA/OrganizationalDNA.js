import React from 'react'
import {ContainerBackgroundTop,BackgroundTop,Title} from './OrganizationalDNA.elements'



const OrganizationalDNA = ({
    Background
}) => {
    return (
        <>
            <ContainerBackgroundTop>
                <BackgroundTop  Background={Background[1]}>
                    <Title>ADN Organizacional</Title>
                </BackgroundTop>
            </ContainerBackgroundTop>
        </>
    )
}

export default OrganizationalDNA
