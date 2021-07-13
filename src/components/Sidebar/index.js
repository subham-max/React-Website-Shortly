import React from 'react';

import { SidebarContainer ,Icon, CloseIcon, Sidebar_wrapper, SideBtnWrap, SidebarRoute, SidebarLink,SidebarMenu } from './sidebar_element';

const Sidebar = ({isOpen, toggle}) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                 <CloseIcon/>
            </Icon>
            <Sidebar_wrapper>
                <SidebarMenu>
                    <SidebarLink to='features' onClick={toggle}>
                    Features
                    </SidebarLink>
                    <SidebarLink to='pricing' onClick={toggle}>
                    Pricing
                    </SidebarLink>
                    <SidebarLink to='Resources'onClick={toggle}>
                    Resources
                    </SidebarLink>
                    <SidebarLink to='login' onClick={toggle} >
                    Login
                    </SidebarLink>
                </SidebarMenu>
                <SideBtnWrap>
                    <SidebarRoute to="/signin">Sign IN</SidebarRoute>
                </SideBtnWrap>
            </Sidebar_wrapper>
        </SidebarContainer>
    )
}

export default Sidebar
