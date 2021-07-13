import React from 'react'
import { FooterContainer, FooterWrap, FooterLinksContainer,FooterLinksWrapper,
     FooterLinksItem, FooterLinkTitle, FooterLink, SocialMedia, SocialMediaWrap,SocialLogo,WebsiteRights,SocialIcons,SocialIconLink} from './footerElements'

     import {FaFacebook,FaTwitter,FaInstagram,FaPinterest} from 'react-icons/fa';

     

const Footer = () => {
    return (
        <FooterContainer>
            <FooterWrap>
                <FooterLinksContainer>
                    <FooterLinksWrapper>
                        <FooterLinksItem>
                            <FooterLinkTitle>Features</FooterLinkTitle>
                                <FooterLink>Link Shortening</FooterLink>
                                <FooterLink>Branded Links</FooterLink>
                                <FooterLink>Analytics</FooterLink>
                        </FooterLinksItem>
                        <FooterLinksItem>
                            <FooterLinkTitle>Resources</FooterLinkTitle>
                                <FooterLink>Blog</FooterLink>
                                <FooterLink>Developer</FooterLink>
                                <FooterLink>Support</FooterLink>
                        </FooterLinksItem>
                    </FooterLinksWrapper>
                    <FooterLinksWrapper>
                        <FooterLinksItem>
                            <FooterLinkTitle>Company</FooterLinkTitle>
                                <FooterLink>About</FooterLink>
                                <FooterLink>Our Team</FooterLink>
                                <FooterLink>Carrers</FooterLink>
                                <FooterLink>Contact</FooterLink>
                        </FooterLinksItem>
                    </FooterLinksWrapper>
                </FooterLinksContainer>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo >Shortly</SocialLogo>
                        <WebsiteRights>Subham © 2021 all rights reserved</WebsiteRights>
                        <SocialIcons>
                            <SocialIconLink href="/" target= "blank" aria-label="Facebook" > <FaFacebook/></SocialIconLink>
                            <SocialIconLink href="/" target= "blank" aria-label="Twitter" > <FaTwitter/></SocialIconLink>
                            <SocialIconLink href="/" target= "blank" aria-label="Instagram" > <FaInstagram/></SocialIconLink>
                            <SocialIconLink href="/" target= "blank" aria-label="Pinterest" > <FaPinterest/></SocialIconLink>

                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
        </FooterContainer>
    )
}

export default Footer
