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
        link: "https://unsplash.com/@jmuniz?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",
        credits: `<p>Unsplash (1) Photo by <a href="https://unsplash.com/@jmuniz?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Joel Muniz</a> on <a href="https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a></p>`,
        image: community,
        title: "A growing family of passionate people",
        body: "Join communities from all sorts of backgrounds and missions and watch how they grow what they believe in."
    },
    {
        link: "https://unsplash.com/@johnschno?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",
        credits: `<p>Unsplash (2) Photo by <a href="https://unsplash.com/@johnschno?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">John Schnobrich</a> on <a href="https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a></p>`,
        image: support,
        title: "Premium support",
        body: "Our full-service customer support will assist you with anything at any time. Don’t hesitate to reach out!"
    },
    {
        link: "https://unsplash.com/@johanemanuel?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",
        credits: `<p>Unsplash (3) Photo by Photo by <a href="https://unsplash.com/@johanemanuel?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Johan Godínez</a> on <a href="https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a></p>`,
        image: onboarding,
        title: "Zero onboarding fees",
        body: "We won’t charge you for upfront or hidden fees. We only earn when you earn, and it’s as simple as that."
    }
]
// END: Data

const Card = ({ link, image, credits, title, body }) => (
    <StyledCard>
        <ImageWrap>
            <Image src={image} alt={credits} />
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
                <Card link={el.link} image={el.image} credits={el.credits} title={el.title} body={el.body} />  
            ))}
        </Wrapper>
        <Sticker src={downSticker} className="bottom" />
    </Container>
)

export default Cards