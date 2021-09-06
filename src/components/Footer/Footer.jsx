import React from "react";
import { Link } from "react-router-dom";
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
`;

export const Copyright = styled.p`
    padding-top: 0.5rem;
`;

export const StyledLink = styled.p`
    cursor: pointer;
    color: var(--muted-light);
    padding: 0.25rem 0;
`;

const Footer = () => (
    <Container>
        <Wrapper className="left">
            <img src={logo} />
            <Copyright className="open-sans overline">Copyright © 2021 Murch, inc. All rights reserved.</Copyright>
        </Wrapper>
        <Wrapper className="right">
            <StyledLink className="open-sans caption">Facebook</StyledLink>
            <StyledLink className="open-sans caption">Instagram</StyledLink>
            <StyledLink className="open-sans caption">LinkedIn</StyledLink>
            <StyledLink className="open-sans caption">murch.info@gmail.com</StyledLink>
        </Wrapper>
    </Container>
)

export default Footer;