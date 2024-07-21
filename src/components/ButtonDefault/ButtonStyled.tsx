import styled from "styled-components";

interface ButtonStyledProps{
    bgColor: string;
    width: string;
    hoverColor: string;
}

const ButtonStyled = styled.button<ButtonStyledProps>`
    background-color: ${props => props.bgColor};
    width: ${props => props.width};
    height: 32px;
    border: 1px solid black;
    border-radius: 6px;
    color: black;
    font-weight: bold;
    font-size: 16px;

    &:hover{
        background-color: ${props => props.hoverColor};
        cursor: pointer;
    }
`

export default ButtonStyled