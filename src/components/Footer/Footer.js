import React from 'react'
import {ContainerFooter} from './Footer.elements'
export const Footer = () => {
    return (
        <>
        <ContainerFooter>
            <ul>
                <li><a>Nosotros</a></li>
                <li><a>Servicios</a></li>
                <li><a>Contacto</a></li>
            </ul>
            <div>
                <p>©Causa Creativa</p><p>Todos los derechos reservados</p>
            </div>
            </ContainerFooter>
        </>
    )
}

export default Footer
