import React, { useState, useEffect } from 'react';
import { FaBars } from 'react-icons/fa'
import{ IconContext } from 'react-icons/lib'
import { animateScroll as scroll } from 'react-scroll'
import {
    Nav,
    NavbarContainer,
    NavLogo,
    MobileIcon,
    NavMenu,
    NavItem,
    NavLinks,
    NavBTN,
    NavBTNLink,
} from './NavbarElements';

const Navbar = ({toggle}) => {
    const [scrollNav, setScrollNav] = useState(false)

    const changeNav = () => {
        if(window.scrollY >= 80){
            setScrollNav(true);
        }else{
            setScrollNav(false);
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', changeNav)
    }, [])

    const toggleHome = () => {
        scroll.scrollToTop();
    }


    return (
        <>
            <IconContext.Provider value={{color: '#fff'}}>
                <Nav scrollNav={scrollNav}>
                    <NavbarContainer>
                        <NavLogo to="/" onClick={toggleHome}>Alligration</NavLogo>
                        <MobileIcon onClick={toggle}>
                            <FaBars />
                        </MobileIcon>
                        <NavMenu>
                            <NavItem>
                                <NavLinks
                                to="Om-Alligration"
                                smooth={true}
                                duration={500}
                                spy={true}
                                exact='true'
                                offset={-80}
                                > Om Alligration
                                </NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks
                                to="Om-Alireza"
                                smooth={true}
                                duration={500}
                                spy={true}
                                exact='true'
                                offset={-80}
                                >Om Alireza</NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks
                                to="Kontakta_oss"
                                smooth={true}
                                duration={500}
                                spy={true}
                                exact='true'
                                offset={-80}
                                >Kontakta Oss</NavLinks>
                            </NavItem>
                        </NavMenu>

                        <NavBTN>
                            <NavBTNLink to="/bokatid"> boka tid </NavBTNLink>
                        </NavBTN>
                    </NavbarContainer>    
                </Nav>
            </IconContext.Provider>
        </>
    );
}

export default Navbar;