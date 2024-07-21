import React from "react"
import FormStyled from "./FormStyled"

interface ModalProps{
    children: React.ReactNode
}

function Modal({children}: ModalProps){
    return(
        <div style={{width: '100%',
            height: '100%', 
            display: "flex", 
            justifyContent: 'center', 
            alignItems: 'center',
            position: 'absolute',
            top: 0,
            right: 0,
            backgroundColor: "#0000004c"}}
            >
            <FormStyled>
                {children}
            </FormStyled>
        </div>
    )
}

export default Modal