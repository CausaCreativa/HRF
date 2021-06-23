import React from 'react';
import { MenuNetworksElements, Social, MenuUl, MenuLI, MenuA, Icon, ContainerIcon} from './menuNetworks.elements';
import { Facebook, Twitter, instagram, Whatsapp } from '../../pages/Home/DataHome';



const MenuNetworks = () => {
    return (
        <>
            <MenuNetworksElements>
                <Social>
                    <MenuUl>
                        <MenuLI>
                            <MenuA {...Facebook} class = "Icon">
                                <ContainerIcon>
                                <Icon  {...Facebook}> </Icon>
                                </ContainerIcon>
                            </MenuA>
                        </MenuLI>
                        <MenuLI>
                            <MenuA {...Twitter} class = "Icon">
                            <ContainerIcon>
                                <Icon  {...Twitter}> </Icon>
                                </ContainerIcon>
                            </MenuA>
                        </MenuLI>
                        <MenuLI>
                            <MenuA {...instagram} class = "Icon">
                            <ContainerIcon>
                                <Icon  {...instagram}> </Icon>
                                </ContainerIcon>
                            </MenuA>
                        </MenuLI>
                        <MenuLI>
                            <MenuA {...Whatsapp} class = "Icon">
                            <ContainerIcon>
                                <Icon  {...Whatsapp}> </Icon>
                                </ContainerIcon>
                            </MenuA>
                        </MenuLI>
                    </MenuUl>
                </Social>
            </MenuNetworksElements>
        </>
    )
}

export default MenuNetworks
