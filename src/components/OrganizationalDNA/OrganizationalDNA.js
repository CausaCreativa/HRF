import React from 'react'
import {ContainerADN, ADNMol, ADNDescription} from './OrganizationalDNA.elements'



const OrganizationalDNA = ({
    Background,

}) => {
    return (
        <>
            <ContainerADN BackgroundADN={Background[0]}>
                <ADNDescription>
                    <div>
                        <h1> hola</h1>
                        <p> estae es el adn humano perros</p>
                    </div>
                </ADNDescription>
                <ADNMol>
                    <div>
                       <img src={Background[5]} alt="valor 1" />
                    </div>
                    <div>
                        <img src={Background[6]} alt="valor 1" />
                    </div>
                    <div>
                        <img src={Background[6]} alt="valor 1" />
                    </div>
                    <div>
                        <img src={Background[6]} alt="valor 1" />
                    </div>
                    <div>
                        <img src={Background[5]} alt="valor 1" />
                    </div>


                </ADNMol>
                <ADNDescription>
                    <div>
                        <h1> hola</h1>
                        <p> estae es el adn humano perros</p>
                    </div>
                    <div>
                        <h1> hola</h1>
                        <p> estae es el adn humano perros</p>
                    </div>
                    <div>
                        <h1> hola</h1>
                        <p> estae es el adn humano perros</p>
                    </div>
                    <div>
                        <h1> hola</h1>
                        <p> estae es el adn humano perros</p>
                    </div>
                    <div>
                        <h1> hola</h1>
                        <p> estae es el adn humano perros</p>
                    </div>

                </ADNDescription>

               

            </ContainerADN>

        </>
    )
}

export default OrganizationalDNA
