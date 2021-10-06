import React from "react";
import styled from "styled-components";

const StyledButton = styled.button.attrs(props => ({
    background: props.theme.background || "var(--muted-dark)",
    color: props.theme.color || "var(--muted-white)",
    borderColor: props.theme.borderColor || "transparent",
    hoverColor: props.theme.hoverColor || "var(--muted-white)",
    hoverShadow: props.theme.hoverShadow || "0px 5px 20px rgba(20, 20, 20, 0.15)",
    cursor: props.theme.cursor || "pointer"
}))`
    display: flex;
    justify-content: center;
    align-items: center;
    align-content: center;

    padding: 0.5rem 1rem;
    
    font-family: 'Fredoka One', sans-serif;
    background: ${props => props.background};
    color: ${props => props.color};
    border: 1px solid ${props => props.borderColor};
    border-radius: 5px;
    
    
    outline: none;
    cursor: ${props => props.cursor};
    transition: all 0.3s ease-in-out;

    :hover {
        color: ${props => props.hoverColor};
        box-shadow: ${props => props.hoverShadow};
    }

    :disabled {
        background: var(--muted-lighter);
    }

    :disabled:hover {
        cursor: default;
        color: var(--muted-white);
        box-shadow: none;
    }
`;

const defTheme = {
    background: "var(--muted-dark)",
    borderColor: "transparent",
    color: "var(--muted-white)",
    hoverColor: "var(--muted-white)",
    hoverShadow: "0px 5px 20px rgba(20, 20, 20, 0.15)",
    cursor: "pointer"
}

const altTheme = {
    background: "transparent",
    borderColor: "transparent",
    color: "var(--yellow-main)",
    hoverColor: "var(--yellow-alt)",
    hoverShadow: "none",
    cursor: "pointer"
}

const Icon = styled.img`
    padding-left: 10px;

    @media screen and (max-width: 640px) {
        display: none;
    }
`;

const Button = ({ link, label, icon, reverse, type, style, onClick, width, disabled }) => (
    <>
        {
            link && link
            ?
            <a href={link} style={{ width: "auto", textDecoration: "none" }}>
                <StyledButton 
                    theme={style ? style : (reverse ? altTheme : defTheme)} 
                    type={type ? type : "button"} 
                    style={{ width: width ? width : "auto" }}
                    disabled={disabled}
                    onClick={onClick} 
                >
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
            <StyledButton 
                theme={style ? style : (reverse ? altTheme : defTheme)} 
                type={type ? type : "button"} 
                style={{ width: width ? width : "auto" }}
                disabled={disabled}
                onClick={onClick} 
            >
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