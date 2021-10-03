import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: auto;
    position: relative;
    margin: 4rem 0 8rem 0;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    align-content: center;

    @media only screen and (max-width: 640px) {
        padding: 0 1rem;
    }
`;

export const Title = styled.h1`
    width: 25%;
    text-align: center;
    font-family: var(--fredoka-one);
    margin-bottom: 2rem;

    @media only screen and (max-width: 1440px) {
        width: 30%;   
    }
    
    @media only screen and (max-width: 1280px) {
        width: 35%;   
    }

    @media only screen and (max-width: 1024px) {
        width: 45%;   
    }

    @media only screen and (max-width: 768px) {
        width: 60%;
        margin-bottom: 1rem;
    }

    @media only screen and (max-width: 640px) {
        width: 100%;
    }
`;

export const Span = styled.span`
    text-align: center;
    font-family: var(--fredoka-one);
    color: var(--yellow-main);
`;

export const Wrapper = styled.div`
    width: 100%;
    height: auto;

    display: flex;
    justify-content: space-evenly;
    align-items: stretch;
    align-content: center;

    @media only screen and (max-width: 960px) {
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
`;

export const StyledCard = styled.div`
    width: 25%;
    height: auto;
    padding: 1.5rem;
    background: var(--muted-white);
    border-radius: 15px;
    z-index: 10;

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    align-content: center;

    @media only screen and (max-width: 1280px) {
        width: 27.5%;
    }

    @media only screen and (max-width: 1024px) {
        width: 30%;
    }

    @media only screen and (max-width: 960px) {
        margin: 1rem 0;
        width: 50%;
    }

    @media only screen and (max-width: 640px) {
        width: 100%;
    }
`;

export const ImageWrap = styled.a`
    width: 100%;
    height: auto;
    overflow: hidden;
    position: relative;

    display: flex;
    justify-content: center;
    align-items: center;
    align-content: center;
`;

export const Image = styled.img`
    -webkit-backface-visibility: hidden;
    -ms-transform: translateZ(0); /* IE 9 */
    -webkit-transform: translateZ(0); /* Chrome, Safari, Opera */
    transform: translateZ(0);

    image-rendering: -moz-crisp-edges;         /* Firefox */
    image-rendering:   -o-crisp-edges;         /* Opera */
    image-rendering: -webkit-optimize-contrast;/* Webkit (non-standard naming) */
    image-rendering: crisp-edges;
    -ms-interpolation-mode: nearest-neighbor;  /* IE (non-standard property) */

    width: 100%;
    height: auto;
    transition: transform 0.3s ease-in-out;

    &:hover {
        transform: scale(1.05);
    }
`;

export const Header = styled.h2`
    margin: 1.5rem 0 0.5rem 0;
    font-family: var(--fredoka-one);
`;

export const Body = styled.p`
    font-family: var(--open-sans);
    color: var(--muted-light);
`;

export const Sticker = styled.img`
    position: absolute;

    &.top {
        top: -3rem;
        left: 0;
    }

    &.bottom {
        right: 0;
        bottom: -16rem;
    }

    @media only screen and (max-width: 1024px) {
        display: none;
    }
`;