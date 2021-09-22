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
import hero from "./assets/hero.png";
import arrow from "./assets/arrow.png";

const Hero = () => (
    <Container style={{ backgroundImage: `url(${hero})` }}>
        <Wrapper>
            <Title>The go to selling platform for <Span>every content creator</Span>.</Title>
            <Body>murch is your buddy for all things merchandise and personalized, connecting you to your fans to <b>sell your story</b>.</Body>
            <Button link="#waitlist" label="Join the waitlist" icon={arrow} />
        </Wrapper>
    </Container>
)

export default Hero;