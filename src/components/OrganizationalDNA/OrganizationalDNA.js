import React from 'react'
import {Container, BackgroundTop} from './OrganizationalDNA.elements'



const OrganizationalDNA = ({
    Background
}) => {
    return (
        <>
            <Container>
                <BackgroundTop src={Background[0]}>

                </BackgroundTop>
            </Container>
        </>
    )
}

export default OrganizationalDNA
