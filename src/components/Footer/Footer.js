import React from 'react'
import {FooterContainer, FooterItem, FooterLink, FooterMenu} from './Footer.elements'
export const Footer = () => {
    return (
        <>
     <FooterContainer>
                <FooterMenu>
                    <FooterItem>
                        <FooterLink to='/aboutUs'>
                            Nosotros
                        </FooterLink>
                    </FooterItem>
                    <FooterItem>
                        <FooterLink to='/services'>
                            Services
                        </FooterLink>
                    </FooterItem>
                    <FooterItem>
                        <FooterLink to='/contact'>
                            Contactanos
                        </FooterLink>
                    </FooterItem>
                </FooterMenu>
                <FooterMenu>
                    <FooterItem>
                    
                    </FooterItem>
                </FooterMenu>
            </FooterContainer>
        </>
    )
}

export default Footer
