import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    align-content: center;

    padding: 0.5rem 1rem;
    background: var(--muted-dark);
    color: var(--muted-white);
    font-family: 'Fredoka One', sans-serif;
    border-radius: 5px;
    border: none;
    outline: none;
    cursor: pointer;
    transition: box-shadow 0.3s ease;

    :hover {
        box-shadow: 0px 5px 20px rgba(20, 20, 20, 0.15);
    }
`;

const Icon = styled.img`
    padding-left: 10px;

    @media screen and (max-width: 640px) {
        display: none;
    }
`;

const Button = ({ link, label, icon }) => (
    <>
        {
            link && link
            ?
            <a href={link} style={{ width: "auto", textDecoration: "none" }}>
                <StyledButton>
                    {label}
                    {
                        icon && icon
                        ?
                            <Icon src={icon} alt="Icon" />
                        :
                            <></>
                    }
                </StyledButton>       
            </a>
            :
            <StyledButton>
                {label}
                {
                    icon && icon
                    ?
                        <Icon src={icon} alt="Icon" />
                    :
                        <></>
                }
            </StyledButton>
        }
    </>
)

export default Button;