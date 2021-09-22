import styled from "styled-components";

export const Container = styled.section`
    width: 100%;
    height: auto;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    align-content: center;

    padding: 7.5rem 0;

    @media only screen and (max-width: 768px) {
        padding: 4rem 0;
    }

    @media only screen and (max-width: 640px) {
        padding: 4rem 0;
    }
`;

export const Wrapper = styled.div`
    width: 100%;
    height: auto;
    padding: 4rem 15rem;
    position: relative;

    display: flex;
    justify-content: center;
    align-items: center;
    align-content: center;

    @media only screen and (max-width: 1536px) {
        padding: 4rem 12rem;
    }

    @media only screen and (max-width: 1280px) {
        padding: 4rem 8rem;
    }

    @media only screen and (max-width: 1024px) {
        padding: 4rem;
    }

    @media only screen and (max-width: 768px) {
        flex-direction: column;
        padding: 4rem 2rem;
    }

    @media only screen and (max-width: 640px) {
        padding: 4rem 1rem;
    }
`;

export const Image = styled.img`
    width: 50%;
    height: auto;
    padding: 0 4rem;

    @media only screen and (max-width: 1280px) {
        padding: 0 2rem;
    }

    @media only screen and (max-width: 768px) {
        width: 75%;
        padding: 1rem 0;
    }

    @media only screen and (max-width: 640px) {
        width: 100%;
    }
`;

export const Content = styled.div`
    width: 50%;
    height: auto;
    padding: 0 4rem;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    align-content: center;

    @media only screen and (max-width: 1024px) {
        padding: 0 2rem;
    }

    @media only screen and (max-width: 768px) {
        width: 75%;
        padding: 1rem 0;
    }

    @media only screen and (max-width: 640px) {
        width: 100%;
    }
`;

export const Header = styled.h1`
    font-family: var(--fredoka-one);
    padding-bottom: 1rem;

    @media only screen and (max-width: 768px) {
        text-align: center;
    }
`;

export const Body = styled.p`
    color: var(--muted-light);

    @media only screen and (max-width: 768px) {
        text-align: center;
    }
`; // Include body-big className