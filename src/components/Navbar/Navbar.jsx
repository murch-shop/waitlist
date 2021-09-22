// DEPENDENCIES
import React from "react";
import styled from "styled-components";

// COMPONENTS
import Button from "../Button";

// ASSETS
import logo from "./assets/logo.png";
import arrow from "./assets/arrow.png";

const Container = styled.div`
    width: 100%;
    height: auto;

    display: flex;
    justify-content: space-between;
    align-items: center;
    align-content: center;

    background: rgba(255, 255, 255, 0.9);
    box-shadow: 0px 4px 8px rgba(20, 20, 20, 0.1);
    padding: 1rem 2rem;
    z-index: 99;

    @media screen and (max-width: 400px) {
        padding: 1rem;
    }
`;

const Logo = styled.img`
    max-height: 42px;
    width: auto;

    @media screen and (max-width: 321px) {
        max-height: 36px;
        width: auto;
    }
`;

const Navbar = () => (
    <Container>
        <Logo src={logo} alt="murch logo" />
        <Button link="#waitlist" label="Join the Waitlist" icon={arrow} />
    </Container>
)

export default Navbar;