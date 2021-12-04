// DEPENDENCIES
import React from "react";

// COMPONENTS AND STYLES
import {
    Container,
    Wrapper,
    ImageWrap,
    Image,
    Content,
    Header,
    Body
} from "./styles";
import "./about.css";

// ASSETS
import logistics from "./assets/logistics.png";
import brand from "./assets/brand.png";
import followers from "./assets/followers.png";
import logisticsBg from "./assets/logisticsBg.png";
import brandBg from "./assets/brandBg.png";

// START: DATA
const data = [
    {
        title: "Personalize your store with your own brand",
        body: "Customize your shop simply and quickly. We understand that merchandise — from what you sell to where you sell them — is an extension of your unique brand.",
        image: {
            name: "Murch Branding",
            url: brand,
            link: "https://storyset.com/design"
        },
        background: {
            url: brandBg,
            className: "brand__bg",
            alt: "Murch Sticker"
        }
    },
    {
        title: "Entrust Murch with your order fulfillment and shipping",
        body: "Automate your operations through our platform. We'll take care of your business needs and keep you posted, so you can focus your time on what matters to you most — your community.",
        image: {
            name: "Murch Logistics",
            url: logistics,
            link: "https://storyset.com/work"
        },
        background: {
            url: logisticsBg,
            className: "logistics__bg",
            alt: "Murch Stickers"
        }
    },
    {
        title: "Merchandise you can call your own, made with us",
        body: "Murch Studio will work with you to design, test, and produce the goods that will reflect your brand the best possible way, and your community members will surely love. Coming Soon!",
        image: {
            name: "Murch Followers",
            url: followers,
            link: "https://storyset.com/people"
        }
    }
]
// END: DATA

const Layout = ({ 
    title, body, image, background
}) => (
    <Wrapper>
        {
            background && background
            ?
                <img src={background.url} className={background.className} alt={background.alt} />
            :
                <></>
        }
        <ImageWrap href={image.link} target="_blank" rel="noreferrer">
            <Image src={image.url} alt={image.name} />
        </ImageWrap>
        <Content>
            <Header>{title}</Header>
            <Body className="body-big">{body}</Body>
        </Content>
    </Wrapper>
);

const About = () => (
    <Container>
        {data.map((el) => (
            <Layout title={el.title} body={el.body} image={el.image} background={el && el.background ? el.background : null} />
        ))}
    </Container>
);

export default About;