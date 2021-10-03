// DEPENDENCIES
import React from "react";
import { Waitlist as WaitlistApi } from 'waitlistapi';

// COMPONENTS
import {
    Section,
    Header,
    HeaderTitle,
    Title,
    Span,
    Star,
    Caption,

    Container,
    Wrapper,
    Card,
    Sticker,
    Content,
    Icon,
    ContentTitle,
    Body,
    Widget
} from "./styles"

// ASSETS
import background from "./assets/background.jpg"
import star from "./assets/star.png"
import sticker from "./assets/waitlist.png"
import icon from "./assets/waitlist_star.png";

const Waitlist = () => (
    <Section id="waitlist">
        <Header>
            <HeaderTitle>
                <Star src={star} alt="Murch Star" className="left" />
                <Title className="fredoka-one">
                    Are you ready to
                    <Span className="fredoka-one"> sell your story</Span>?
                </Title>
                <Star src={star} alt="Murch Star" className="right" />
            </HeaderTitle>
            <Caption>Join our waitlist and be one of the first to try Murch when we launch in private beta.</Caption>
        </Header>

        <Container style={{ backgroundImage: `url(${background})` }}>
            <Wrapper>
                <Sticker src={sticker} alt="Murch Sticker" className="left" />
                <Card>
                    <Content>
                        <Icon src={icon} alt="Star" />
                        <ContentTitle className="fredoka-one">Get Early Access</ContentTitle>
                        <Body className="open-sans">By signing up, you’ll be part of an exclusive community — gaining the latest news &amp; updates on Murch, and the creator space!</Body>
                    </Content>
                    <Widget>
                        <WaitlistApi api_key="EAYIW2" waitlist_link="https://waitlist.murch.shop/" />
                    </Widget>
                </Card>
                <Sticker src={sticker} alt="Murch Sticker" className="right" />
            </Wrapper>
        </Container>
    </Section>
)

export default Waitlist;