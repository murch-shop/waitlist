import React from "react";
// import { Link } from "react-router-dom";
import styled from "styled-components";

import logo from "./assets/logo.png"

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

const StyledLink = styled.a`
    text-decoration: none;
    color: var(--muted-light);
    padding: 0.25rem 0;
    transition: color 0.3s ease-in-out;

    :hover {
        color: var(--yellow-alt);
    }
`;

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
            <StyledLink href="" className="open-sans caption">Facebook</StyledLink>
            <StyledLink href="" className="open-sans caption">Instagram</StyledLink>
            <StyledLink href="" className="open-sans caption">LinkedIn</StyledLink>
            <StyledLink href="" className="open-sans caption">murch.info@gmail.com</StyledLink>
        </Wrapper>
    </Container>
)

export default Footer;