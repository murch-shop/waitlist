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
        padding: 0 1rem;
        width: 100%;
    }
`;

export const HeaderTitle = styled.div`
    position: relative;
    padding: 1rem 1.5rem;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    align-content: center;

    @media screen and (max-width: 1024px) {
        padding: 1rem;
    }

    @media screen and (max-width: 640px) {
        padding: 0rem;
    }
`;

export const Title = styled.h1`
    width: 60%;
    position: relative;
    text-align: center;

    @media screen and (max-width: 640px) {
        width: 100%;
        padding: 2rem 0;
    }
`;

export const Span = styled.span`
    color: var(--yellow-main);
`;

export const Star = styled.img`
    image-rendering: -moz-crisp-edges;         /* Firefox */
    image-rendering:   -o-crisp-edges;         /* Opera */
    image-rendering: -webkit-optimize-contrast;/* Webkit (non-standard naming) */
    image-rendering: crisp-edges;
    -ms-interpolation-mode: nearest-neighbor;  /* IE (non-standard property) */

    position: absolute;
    width: 3rem;
    height: auto;

    &.left {
        top: -16px;
        left: -128px;
    }

    &.right {
        bottom: -32px;
        right: -160px;
    }

    @media screen and (max-width: 1024px) {
        &.left {
            top: -16px;
            left: -64px;
        }
    
        &.right {
            bottom: -32px;
            right: -80px;
        }
    }

    @media screen and (max-width: 640px) {
        display: none;
    }
`;

export const Caption = styled.p`
    width: 70%;
    color: var(--muted-light);
    text-align: center;

    @media screen and (max-width: 640px) {
        width: 100%;
    }
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
    width: 80%;
    position: relative;
    padding: 2.5rem 4rem;

    @media screen and (min-width: 1920px) {
        width: 75%;
    }

    @media screen and (max-width: 1440px) {
        width: 90%;
        padding: 2rem;
    }

    @media screen and (max-width: 1280px) {
        width: 100%;
        padding: 2rem;
    }

    @media screen and (max-width: 1024px) {
        width: auto;
        padding: 4rem;
    }

    @media screen and (max-width: 768px) {
        width: auto;
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
    width: 45%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    align-content: center;

    @media screen and (min-width: 1920px) {
        width: 50%;
    }

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
    width: 80%;
    color: var(--muted-white);

    @media screen and (max-width: 1024px) {
        width: 100%;
    }
`;

export const Widget = styled.div`
    width: 55%;
    padding: 4rem 2rem;
    border-radius: 10%;
    background: #FFF;

    @media screen and (min-width: 1920px) {
        width: 50%;
    }

    @media screen and (max-width: 1024px) {
        width: 100%;
        border-radius: 5%;
    }

    @media screen and (max-width: 640px) {
        padding: 2rem 1rem;
    }
`;

export const Form = styled.form`
    width: 100%;
    border-radius: 10%;
    background: #FFF;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    align-content: center;
`;

export const FormTitle = styled.h1`
    padding: 1rem 0;
    color: var(--muted-dark);
`;

export const FormRow = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    align-content: center;
    margin: 0.25rem 0;

    &.buttons {
        margin: 1.5rem 0 0.5rem 0;
    }

`;

export const FieldWrap = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    align-content: center;

    &.row {
        width: 48%;
    }
`;
    
export const Field = styled.input`
    width: 100%;
    height: auto;
    background: var(--muted-white);
    padding: 0.5rem 1rem;
    border: 1px solid transparent;
    border-radius: 8px;
    outline: none;
    transition: border 0.3s ease-in-out;

    font-family: var(--open-sans);
    font-size: 1rem;
    color: var(--muted-dark);

    &:focus {
        border: 1px solid var(--yellow-main);
    }

    // Chrome, Firefox, Opera, Safari 10.1+
    &::placeholder {
        font-size: 0.875rem;
        color: var(--muted-light);
    }
      
    // Internet Explorer 10-11
    &:-ms-input-placeholder {
        font-size: 0.875rem;
        color: var(--muted-light);
    }
      
    // Microsoft Edge
    &::-ms-input-placeholder {
        font-size: 0.875rem;
        color: var(--muted-light);
    }
`;

export const Error = styled.p`
    color: var(--indicator-red);
    margin-bottom: 0.5rem;
`;

export const Status = styled.div`
    width: 100%;
    border-radius: 10%;
    background: #FFF;
    
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    align-content: center;
`;

export const StatusTitle = styled.h1`
    color: var(--muted-dark);
    padding: 1rem 0;
    text-align: center;
`;

export const StatusRow = styled.div`
    width: 100%;
    height: auto;
    margin: 1rem 0 2rem 0;

    display: flex;
    justify-content: space-between;
    align-items: center;
    align-content: center;

    @media only screen and (max-width: 640px) {
        flex-direction: column;
        justify-content: center;
    }
`;

export const StatusContent = styled.div`
    width: 47.5%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    align-content: center;

    @media only screen and (max-width: 640px) {
        width: 100%;
        margin: 1rem 0;
    }
`;

export const StatusSubtitle = styled.p`
    font-family: var(--open-sans);
    font-size: 1rem;
    color: var(--muted-light);
    text-align: center;
    padding-bottom: 0.5rem;
`;

export const StatusStats = styled.p`
    font-family: var(--open-sans);
    font-size: 1.5rem;
    color: var(--muted-dark);
    text-align: center;
`;

export const ReferralLink = styled.div`
    width: 100%;
    height: auto;
    padding: 1rem;
    margin-bottom: 2rem;
    background: var(--muted-white);
    box-shadow: var(--normal-drop-shadow);

    font-family: var(--open-sans);
    font-size: 1rem;
    color: var(--muted-light);
    
    @media only screen and (max-width: 640px) {
        text-align: center;
    }
`;