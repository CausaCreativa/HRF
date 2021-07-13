import React from 'react'
import {ContainerADN, ADNMol} from './OrganizationalDNA.elements'



const OrganizationalDNA = ({
    Background
}) => {
    return (
        <>
            <ContainerADN BackgroundADN={Background[0]}>

                <ADNMol>

                </ADNMol>

            </ContainerADN>

        </>
    )
}

export default OrganizationalDNA
