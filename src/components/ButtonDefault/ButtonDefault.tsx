import React from "react";
import ButtonStyled from "./ButtonStyled";

interface ButtonDefaultProps{
    children: React.ReactNode,
    bgColor?: string,
    width?: string,
    action?: (event: React.MouseEvent<HTMLButtonElement>) => void,
    type?: string,
    hoverColor?: string,
    style?: React.CSSProperties
}

function ButtonDefault({ action, children, bgColor, width, hoverColor, style }: ButtonDefaultProps){
    return(
        <ButtonStyled
            bgColor={bgColor}
            width={width}
            onClick={action}
            hoverColor={hoverColor}
            style={style}
        >
        {children}
        </ButtonStyled>
    )
}

export default ButtonDefault