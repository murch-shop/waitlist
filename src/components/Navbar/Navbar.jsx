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
    image-rendering: -moz-crisp-edges;         /* Firefox */
    image-rendering:   -o-crisp-edges;         /* Opera */
    image-rendering: -webkit-optimize-contrast;/* Webkit (non-standard naming) */
    image-rendering: crisp-edges;
    -ms-interpolation-mode: nearest-neighbor;  /* IE (non-standard property) */
    
    height: auto;
    width: auto;
`;

const Navbar = () => (
    <Container>
        <Logo src={logo} alt="murch logo" />
        <Button link="#waitlist" label="Join the Waitlist" icon={arrow} />
    </Container>
)

export default Navbar;