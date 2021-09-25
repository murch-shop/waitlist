import styled from "styled-components";

export const Section = styled.section`
    width: 100%;
    height: auto;

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    align-content: center;

    background: #FFFFFF;
    padding: 4rem 0;

    @media screen and (max-width: 1024px) {
        padding: 2rem 0;
    }
`;

export const Header = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    align-content: center;

    width: 568px; // approx. 40% of 100vw for 1440 display

    @media screen and (max-width: 1024px) {
        width: 50%;
    }

    @media screen and (max-width: 768px) {
        width: 75%;
    }

    @media screen and (max-width: 640px) {
        width: 100%;
    }
`;

export const HeaderTitle = styled.div`
    position: relative;
    padding: 1rem 1.5rem;

    @media screen and (max-width: 1024px) {
        padding: 1rem;
    }

    @media screen and (max-width: 640px) {
        padding: 0rem;
    }
`;

export const Title = styled.h1`
    position: relative;
    text-align: center;

    @media screen and (max-width: 640px) {
        padding: 1rem;
    }
`;

export const Span = styled.span`
    color: var(--yellow-main);
`;

export const Star = styled.img`
    position: absolute;

    &.left {
        top: -16px;
        left: -64px;
    }

    &.right {
        bottom: 0;
        right: -96px;
    }

    @media screen and (max-width: 640px) {
        &.left {
            top: -16px;
            left: -8px;
        }
    
        &.right {
            bottom: 0;
            right: -16px;
        }
    }
`;

export const Caption = styled.p`
    color: var(--muted-light);
    text-align: center;
`;

export const Container = styled.div`
    width: 100%;
    min-height: 420px;
    height: auto;
    padding: 2.5rem;

    display: flex;
    justify-content: center;
    align-items: center;
    align-content: center;

    background-repeat: no-repeat;
    background-size: cover;
    background-position: top left;

    @media screen and (max-width: 1024px) {
        padding: 1rem;
        background-size: cover;
        background-position: center;
    }
`;

export const Wrapper = styled.div`
    width: 75%;
    position: relative;
    padding: 2.5rem 4rem;

    @media screen and (max-width: 1280px) {
        width: 100%;
        position: relative;
        padding: 2rem;
    }

    @media screen and (max-width: 1024px) {
        width: auto;
        position: relative;
        padding: 4rem;
    }

    @media screen and (max-width: 768px) {
        width: auto;
        position: relative;
        padding: 2rem;
    }

    @media screen and (max-width: 640px) {
        width: 100%;
        padding: 2rem 0.5rem;
    }
`;

export const Card = styled.div`
    width: auto;
    height: auto;
    background: var(--muted-dark);
    border-radius: 20px;
    padding: 2.5rem 4rem;

    display: flex;
    justify-content: space-between;
    align-items: center;
    align-content: center;
    position: relative;

    @media screen and (max-width: 1024px) {
        justify-content: flex-start;
        flex-direction: column;
        padding: 2rem;
    }
`;

export const Sticker = styled.img`
    position: absolute;
    z-index: 20;

    &.left {
        top: 0;
        left: 0;
        transform: rotate(-8deg);
    }

    &.right {
        bottom: 0;
        right: 0;
        transform: rotate(172deg);
    }

    @media screen and (max-width: 768px) {
        display: none;
    }
`;

export const Content = styled.div`
    width: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    align-content: center;

    @media screen and (max-width: 1024px) {
        width: 100%;
        padding-bottom: 2rem;
    }

    @media screen and (max-width: 768px) {
        width: 100%;
    }
`;

export const Icon = styled.img``;

export const ContentTitle = styled.h1`
    padding: 0.75rem 0 0.5rem 0;
    color: var(--muted-white);
`;

export const Body = styled.p`
    color: var(--muted-white);
`;

export const Widget = styled.div`
    padding: 4rem 2rem;
    border-radius: 10%;
    background: #FFF;

    @media screen and (max-width: 1024px) {
        border-radius: 5%;
    }

    @media screen and (max-width: 640px) {
        padding: 2rem 1rem;
    }
`;