import React from 'react';
import { MenuNetworksElements, Social, MenuUl, MenuLI, MenuA } from './menuNetworks.elements';
import { Facebook, Twitter, instagram, Whatsapp } from '../../pages/Home/DataHome';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook,  faTwitter, faInstagram, faWhatsapp} from '@fortawesome/free-brands-svg-icons';


const MenuNetworks = () => {
    return (
        <>
            <MenuNetworksElements>
                <Social>
                    <MenuUl>
                        <MenuLI>
                            <MenuA {...Facebook} >
                                <FontAwesomeIcon  icon = {faFacebook} style={{height:"22px", width:"22px", display:"flex", justifycontent:'center'}}> 
                                </FontAwesomeIcon>
                            </MenuA>
                        </MenuLI>
                        <MenuLI>
                            <MenuA {...Twitter} class = "Icon">
                                <FontAwesomeIcon  icon = {faTwitter}> </FontAwesomeIcon>
                            </MenuA>
                        </MenuLI>
                        <MenuLI>
                            <MenuA {...instagram} class = "Icon">
                                <FontAwesomeIcon  icon = {faInstagram}> </FontAwesomeIcon>
                            </MenuA>
                        </MenuLI>
                        <MenuLI>
                            <MenuA {...Whatsapp} class = "Icon">
                                <FontAwesomeIcon  icon = {faWhatsapp}></FontAwesomeIcon>
                            </MenuA>
                        </MenuLI>
                    </MenuUl>
                </Social>
            </MenuNetworksElements>
        </>
    )
}

export default MenuNetworks
