import React from "react";
// import { Link } from "react-router-dom";
import styled from "styled-components";

import logo from "./assets/logo.png";
import arrow from "./assets/arrow.png"

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

const Button = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    align-content: center;

    padding: 0.5rem 1rem;
    background: var(--muted-dark);
    color: var(--muted-white);
    font-family: 'Fredoka One', sans-serif;
    border-radius: 5px;
    border: none;
    outline: none;
    cursor: pointer;
    transition: box-shadow 0.3s ease;

    :hover {
        box-shadow: 0px 5px 20px rgba(20, 20, 20, 0.15);
    }
`;

const Arrow = styled.img`
    padding-left: 10px;

    @media screen and (max-width: 321px) {
        display: none;
    }
`;

const Navbar = () => (
    <Container>
        <Logo src={logo} alt="murch logo" />
        {/* <Link to="#"> */}
            <Button>
                Join the Waitlist
                <Arrow src={arrow} alt="back arrow" />
            </Button>
        {/* </Link> */}
    </Container>
)

export default Navbar;