import styled from "styled-components";

export const Container = styled.section`
    width: 100%;
    height: 100vh;
    padding: 6rem 3rem;

    display: flex;
    justify-content: center;
    align-items: flex-start;
    align-content: center;

    background-size: cover;
    background-repeat: no-repeat;
    background-position: bottom;

    @media only screen and (max-width: 1024px) {
        padding: 4rem 2rem;
    }

    @media only screen and (max-width: 640px) {
        padding: 2rem 1rem;
    }
`;

export const Wrapper = styled.div`
    width: 568px;
    height: auto;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    align-content: center;

    @media only screen and (max-width: 640px) {
        width: 100%;
    }
`;

export const Title = styled.h1`
    width: 100%;
    height: auto;
    font-family: var(--fredoka-one);
    text-align: center;
`;

export const Span = styled.span`
    font-family: var(--fredoka-one);
    color: var(--yellow-main);
`;

export const Body = styled.p`
    font-family: var(--open-sans);
    color: var(--muted-light);
    text-align: center;
    padding: 1rem 0 2rem 0;
`;