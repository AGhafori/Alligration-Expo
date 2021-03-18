import React from 'react'
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa'
import { animateScroll as scroll} from 'react-scroll'
import{
    FooterContainer,
    SocialMedia,
    SocialMediaWrap,
    SocialLogo,
    SocialIcons,
    SocialIconLink

}from './FooterElements'

const Footer = () => {
    const toggleHome = () => {
        scroll.scrollToTop();
    }
    return (
        <FooterContainer>
            <SocialMedia>
                <SocialMediaWrap>
                    <SocialLogo to='/' onClick={toggleHome}> Alligration </SocialLogo>
                    <SocialIcons>
                        <SocialIconLink href="https://www.facebook.com/Alligration-1771070109860294" target="_blank" aria-label="Facebook">
                            <FaFacebook/>
                        </SocialIconLink>

                        <SocialIconLink href="https://www.instagram.com/alireza.ahmadi.se/" target="_blank" aria-label="Instagram">
                            <FaInstagram />
                        </SocialIconLink>

                        <SocialIconLink href="/" target="_blank" aria-label="Twitter">
                            <FaTwitter />
                        </SocialIconLink>

                        <SocialIconLink href="https://www.linkedin.com/company/alligration/" target="_blank" aria-label="Linkedin">
                            <FaLinkedin />
                        </SocialIconLink>

                    </SocialIcons>
                </SocialMediaWrap>
            </SocialMedia>
            
        </FooterContainer>
    )
}

export default Footer