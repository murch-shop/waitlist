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

    @media screen and (max-width: 400px) {
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

    @media screen and (max-width: 400px) {
        width: 100%;
        padding-bottom: 1rem;

        &.left, &.right {
            align-items: center;
        }
    }
`;

export const Copyright = styled.p`
    text-align: center;
    padding-top: 0.5rem;

    // @media screen and (max-width: 400px) {
    //     display: none;
    // }
`;

export const StyledLink = styled.a`
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
            <img src={logo} alt="murch logo" />
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