import React from 'react'
import {ContainerADN,
        ADNMol,
        ADNDescription,TitleContainer
        } from './OrganizationalDNA.elements'



const OrganizationalDNA = ({
    Background,

}) => {
    return (
        <>
            <ContainerADN BackgroundADN={Background[0]}>
                <TitleContainer>
                    <h1>
                        ADN ORGANIZACIONAL
                    </h1>

                </TitleContainer>
                <ADNDescription>

                    <div>
                        <h1> EFICIENTE</h1>
                    </div>
                    <div></div>
                    <div>
                        <h1>ÍNTEGRO</h1>
                    </div>
                    <div></div>
                    <div>
                        <h1>INNOVADOR</h1>
                    </div>
                </ADNDescription>
                <ADNMol>
                    <div>
                       <img src={Background[11]} alt="valor 1" />
                    </div>
                    <div>
                        <img src={Background[9]} alt="valor 1" />
                    </div>
                    <div>
                        <img src={Background[6]} alt="valor 1" />
                    </div>
                    <div>
                        <img src={Background[9]} alt="valor 1" />
                    </div>
                    <div>
                        <img src={Background[5]} alt="valor 1" />
                    </div>


                </ADNMol>
                <ADNDescription>
                        <div>
                            <h1> EMPÁTICO</h1>
                        </div>
                        <div></div>
                        <div>
                            <h1>VISIONARIO</h1>
                        </div>
                        <div></div>
                        <div>
                            <h1> FACILITADOR</h1>
                        </div>

                </ADNDescription>

               

            </ContainerADN>

        </>
    )
}

export default OrganizationalDNA
