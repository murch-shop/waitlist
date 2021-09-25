// DEPENDENCIES
import React from "react";

// COMPONENTS
import {
    Container,
    Title,
    Subtitle,
    Span,
    Wrapper,
    StyledCard,
    ImageWrap,
    Image,
    Header,
    Body,
    Sticker
} from "./styles"

// ASSETS
import upSticker from "./assets/up-sticker.png";
import downSticker from "./assets/down-sticker.png";
import community from "./assets/community.png";
import support from "./assets/support.png";
import onboarding from "./assets/onboarding.png";

// START: Data
const data = [
    {
        image: community,
        title: "A growing community of content creators",
        body: "Creators from Youtube, Twitch, Tiktok, and more have made a home for their own shops in murch."
    },
    {
        image: support,
        title: "Premium support",
        body: "Our full-service customer support will assist you with anything at any time. Don’t hesitate to reach out!"
    },
    {
        image: onboarding,
        title: "Zero onboarding fees",
        body: "We won’t charge you for upfront or hidden fees, ever. We only earn when you earn, and it’s as simple as that."
    }
]

// END: Data

const Card = ({ image, title, body }) => (
    <StyledCard>
        <ImageWrap>
            <Image src={image} alt={title} />
        </ImageWrap>
        <Header>{title}</Header>
        <Body>{body}</Body>
    </StyledCard>
)

const Cards = () => (
    <Container>
        <Sticker src={upSticker} className="top" />
        <Title>What are you waiting for?</Title>
        <Subtitle><Span>Sell your story</Span> with murch.</Subtitle>
        <Wrapper>
            {data.map((el) => (
                <Card image={el.image} title={el.title} body={el.body} />  
            ))}
        </Wrapper>
        <Sticker src={downSticker} className="bottom" />
    </Container>
)

export default Cards