import React from "react";
// import { Link } from "react-router-dom";
import styled from "styled-components";

import logo from "./assets/logo.png";
import fb from "./assets/fb.png";
import ig from "./assets/ig.png";
import twitter from "./assets/twitter.png";
import linkedin from "./assets/linkedin.png";

const Container = styled.footer`
    width: 100%;
    height: auto;
    padding: 50px 100px;

    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    align-content: center;

    background: var(--muted-white);

    @media screen and (max-width: 640px) {
        padding: 2rem;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
    }
`;

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;

    &.left {
        align-items: flex-start;
    }

    &.right {
        align-items: flex-end;
    }

    @media screen and (max-width: 640px) {
        width: 100%;

        &.left {
            padding-bottom: 1rem;
        }

        &.left, &.right {
            align-items: center;
        }
    }
`;

const LogoWrap = styled.div`
    width: auto;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    align-content: center;
`;

const Logo = styled.img`
    image-rendering: -moz-crisp-edges;         /* Firefox */
    image-rendering:   -o-crisp-edges;         /* Opera */
    image-rendering: -webkit-optimize-contrast;/* Webkit (non-standard naming) */
    image-rendering: crisp-edges;
    -ms-interpolation-mode: nearest-neighbor;  /* IE (non-standard property) */
    
    height: 48px;
    width: auto;
    margin-right: 0.75rem;
`;

const LogoName = styled.h1`
    font-family: var(--fredoka-one);
`;

const Copyright = styled.p`
    text-align: center;
    padding-top: 0.5rem;

    // @media screen and (max-width: 640px) {
    //     display: none;
    // }
`;

const Socials = styled.div`
    width: 100%;
    height: auto;

    display: flex;
    justify-content: flex-end;
    align-items: center;
    align-content: center;

    @media screen and (max-width: 768px) {
        justify-content: center;
    }
`;

const Social = styled.img`
    width: auto;
    height: auto;
    cursor: pointer;

    -webkit-backface-visibility: hidden;
    -ms-transform: translateZ(0); /* IE 9 */
    -webkit-transform: translateZ(0); /* Chrome, Safari, Opera */
    transform: translateZ(0);

    image-rendering: -moz-crisp-edges;         /* Firefox */
    image-rendering:   -o-crisp-edges;         /* Opera */
    image-rendering: -webkit-optimize-contrast;/* Webkit (non-standard naming) */
    image-rendering: crisp-edges;
    -ms-interpolation-mode: nearest-neighbor;  /* IE (non-standard property) */

    margin-left: 2rem;
    transition: transform 0.3s ease-in-out;

    &:hover {
        transform: translateY(-10%);
    }

    @media screen and (max-width: 768px) {
        margin: 0 0.5rem;
    }
`;

const StyledLink = styled.a`
    text-decoration: none;
    color: var(--muted-light);
    padding: 0.25rem 0;
    transition: color 0.3s ease-in-out;

    :hover {
        color: var(--yellow-alt);
    }
`;

const socials = [
    {
        icon: fb,
        alt: "Facebook",
        url: "https://www.facebook.com/murchshop/"
    },
    {
        icon: ig,
        alt: "Instagram",
        url: "https://www.instagram.com/murchshop_/"
    },
    {
        icon: twitter,
        alt: "Twitter",
        url: "https://www.twitter.com/murchshop/"
    },
    {
        icon: linkedin,
        alt: "LinkedIn",
        url: "https://www.linkedin.com/company/murchshop/"
    },
]

const Footer = () => (
    <Container>
        <Wrapper className="left">
            <LogoWrap>
                <Logo src={logo} alt="murch logo" />
                <LogoName>murch</LogoName>
            </LogoWrap>
            <Copyright className="open-sans overline">Copyright © 2021 Murch, inc. All rights reserved.</Copyright>
        </Wrapper>
        <Wrapper className="right">
            <Socials>
                {socials.map((social) => (
                    <StyledLink href={social.url} target="_blank" rel="noreferrer">
                        <Social src={social.icon} alt={social.alt} />
                    </StyledLink>
                ))}
            </Socials>
            <StyledLink href="mailto:murch.info@gmail.com" className="open-sans caption">murch.info@gmail.com</StyledLink>
        </Wrapper>
    </Container>
)

export default Footer;