// DEPENDENCIES
import React from "react";

// COMPONENTS AND STYLES
import {
    Container,
    Wrapper,
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
        title: "Go hands-off with inventory and logistics management",
        body: "Automate your operations through our platform. We’ll take care of your business needs and keep you posted, while you can focus your time on what matters most—creating your content.",
        image: {
            name: "Murch Logistics",
            url: logistics
        },
        background: {
            url: logisticsBg,
            className: "logistics__bg",
            alt: "Murch Stickers"
        }
    },
    {
        title: "Personalize your store’s space with your brand",
        body: "Customize your business simply, easily, and quickly. We understand that merchandise, from what you sell to where and how you sell them, is an extension of your personal brand.",
        image: {
            name: "Murch Branding",
            url: brand
        },
        background: {
            url: brandBg,
            className: "brand__bg",
            alt: "Murch Sticker"
        }
    },
    {
        title: "Interact with and update your followers in real-time",
        body: "Engage with your own community in the most thoughtful way. We’ve got you fully covered with  integrations of anticipated drops, polls, and other features that are just waiting to be explored.",
        image: {
            name: "Murch Followers",
            url: followers
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
        <Image src={image.url} alt={image.name} />
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