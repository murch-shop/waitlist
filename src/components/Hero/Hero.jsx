// DEPENDENCIES
import React from "react";

// COMPONENTS
import {
    Container,
    Wrapper,
    Title,
    Span,
    Body
} from "./styles";
import Button from "../Button";

// ASSETS
import hero from "./assets/hero.jpg";
import arrow from "./assets/arrow.png";

const Hero = () => (
    <Container style={{ backgroundImage: `url(${hero})` }}>
        <Wrapper>
            <Title>The go to selling platform for <Span>creators</Span>.</Title>
            <Body>Murch is your buddy in starting your merchandise journey, connecting you to your fans so you can sell your story.</Body>
            <Button link="#waitlist" label="Join the waitlist" icon={arrow} />
        </Wrapper>
    </Container>
)

export default Hero;