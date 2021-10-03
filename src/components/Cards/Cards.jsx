// DEPENDENCIES
import React from "react";

// COMPONENTS
import {
    Container,
    Title,
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
        link: "https://storyset.com/work",
        image: community,
        title: "A growing community of content creators",
        body: "Join creators from Youtube, Twitch, Tiktok, & more, who are ready to make a home for their own shops in Murch."
    },
    {
        link: "https://storyset.com/design",
        image: support,
        title: "Premium support",
        body: "Our full-service customer support will assist you with anything at any time. Don’t hesitate to reach out!"
    },
    {
        link: "https://storyset.com/people",
        image: onboarding,
        title: "Zero onboarding fees",
        body: "We won’t charge you for upfront or hidden fees. We only earn when you earn, and it’s as simple as that."
    }
]
// END: Data

const Card = ({ link, image, title, body }) => (
    <StyledCard>
        <ImageWrap href={link} target="_blank" rel="noreferrer">
            <Image src={image} alt={title} />
        </ImageWrap>
        <Header>{title}</Header>
        <Body>{body}</Body>
    </StyledCard>
)

const Cards = () => (
    <Container>
        <Sticker src={upSticker} className="top" />
        <Title>Start your merchandise journey<Span> with Murch</Span>.</Title>
        <Wrapper>
            {data.map((el) => (
                <Card link={el.link} image={el.image} title={el.title} body={el.body} />  
            ))}
        </Wrapper>
        <Sticker src={downSticker} className="bottom" />
    </Container>
)

export default Cards