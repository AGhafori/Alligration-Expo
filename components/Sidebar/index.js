import React from 'react'
import { SidebarContainer,
    Icon,
    CloseIcon,
    SidebarMenu,
    SidebarWrapper,
    SidebarLink,
    SideBTNWrap,
    SidebarRoute,
    
} from './SidebarElements'


function Sidebar({isOpen, toggle}) {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon/>
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to="Om-Alligration" onClick={toggle}>Om Alligration</SidebarLink>
                    <SidebarLink to="Om-Alireza" onClick={toggle}>Om Alireza</SidebarLink>
                    <SidebarLink to="Kontakta_oss" onClick={toggle}>Kontakta Oss</SidebarLink>
                </SidebarMenu>
                <SideBTNWrap>
                    <SidebarRoute to='/bokatid'> boka tid </SidebarRoute>

                </SideBTNWrap>

            </SidebarWrapper>
            
        </SidebarContainer>
    )
}

export default Sidebar
