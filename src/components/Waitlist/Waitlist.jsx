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
                    Start your merchandise journey<br />
                    <Span className="fredoka-one">with murch</Span>.
                </Title>
                <Star src={star} alt="Murch Star" className="right" />
            </HeaderTitle>
            <Caption>We’ll hop you right onboard once ready, referring to your fellow creators will bump you further up the list!</Caption>
        </Header>

        <Container style={{ backgroundImage: `url(${background})` }}>
            <Wrapper>
                <Sticker src={sticker} alt="Murch Sticker" className="left" />
                <Card>
                    <Content>
                        <Icon src={icon} alt="Star" />
                        <ContentTitle className="fredoka-one">Join the Waitlist</ContentTitle>
                        <Body className="open-sans">Get exclusive access to...</Body>
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