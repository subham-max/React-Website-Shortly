import React from 'react';
import { Nav, NavbarContainer, NavLogo, MobileIcon, NavLinks, NavItem, NavMenu,NavBtn,NavBtnLink } from './navbar_element';
import {FaBars} from 'react-icons/fa';
const Navbar = ({toggle}) => {
    return (
        <>
        <Nav>
            <NavbarContainer>
                <NavLogo to='/'>Shortly</NavLogo>
                <MobileIcon onClick={toggle}>
                    <FaBars />
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks to='features'>Features</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='Statistics'>Pricing</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='resources'>Resources</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='signup'>Sign Up</NavLinks>
                        </NavItem>
                    </NavMenu>
                    <NavBtn>
                        <NavBtnLink to='/signin'>Sign In</NavBtnLink>
                    </NavBtn>
                    <NavBtn>
                        <NavBtnLink to='/login'>Login</NavBtnLink>
                    </NavBtn>
                
            </NavbarContainer>
        </Nav>
        </>
    )
}

export default Navbar
