import React, {useState, useEffect} from 'react';
import {FaBars, FaTimes} from 'react-icons/fa';
import {IconContext} from 'react-icons/lib';
import {Nav,
        NavbarContainer,
        NavLogo,
        NavIcon,
        MobileIcon,
        NavMenu,
        NavItem,
        NavLinks,
        } from './Navbar.elements'





const Navbar = () => {
    const [click, setClick]= useState(false);
    const [/*button*/, setButton] = useState(true);


    const handleClick= () => setClick(!click);
    const showButton = () => {
        if(window.innerWidth <= 960 ) {
            setButton(false)
        } else{
            setButton(true)
            }
        }

        useEffect (() =>{
            showButton()
        }, []);

        window.addEventListener('resize', showButton);

    return (
        <>
        <IconContext.Provider value={{color:'blue'}}>
        <Nav>
            <NavbarContainer>
                <NavLogo to="/">
                    <NavIcon />
                </NavLogo>
                <MobileIcon onClick= {handleClick}>
                    {click ? <FaTimes/> :
                    <FaBars/>}
                </MobileIcon>
                <NavMenu onClick = {handleClick} click={click}>
                        <NavItem>
                        <NavLinks to='/'>
                            Inicio
                        </NavLinks>
                        </NavItem>
                        <NavItem>
                        <NavLinks to='/aboutUs'>
                            Nosotros
                        </NavLinks>
                        </NavItem>
                        <NavItem>
                        <NavLinks to='/services'>
                            Servicios
                        </NavLinks>
                        </NavItem>
                        <NavItem>
                        <NavLinks to='/contact'>
                            Contacto
                        </NavLinks>
                        </NavItem>
                </NavMenu>
            </NavbarContainer>
        </Nav>
        </IconContext.Provider>
        </>
    )
}

export default Navbar
