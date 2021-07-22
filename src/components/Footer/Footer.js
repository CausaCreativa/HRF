import React from 'react'
import {ContainerLogo, Copyrigth, FooterContainer, FooterItem, FooterLink, FooterMenu, LogoFooter} from './Footer.elements'
export const Footer = () => {
    return (
        <>
        <FooterContainer>
        <ContainerLogo>
 <LogoFooter/>
                </ContainerLogo>
                <FooterMenu>
                    <FooterItem>
                        <FooterLink to='/aboutUs'>
                            Nosotros
                        </FooterLink>
                    </FooterItem>
                    <FooterItem>
                        <FooterLink to='/services'>
                            Servicios
                        </FooterLink>
                    </FooterItem>
                    <FooterItem>
                        <FooterLink to='/contact'>
                            Contactanos
                        </FooterLink>
                    </FooterItem>
                </FooterMenu>
                <FooterMenu>
                    <Copyrigth>®Causa Creativa <br></br> Todos los derechos reservados</Copyrigth>
                </FooterMenu>
            </FooterContainer>
        </>
    )
}

export default Footer
