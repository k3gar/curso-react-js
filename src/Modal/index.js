import React from "react";
import { createPortal } from "react-dom";

function Modal({children}){
    return createPortal(
        <div className="Modal-Element">
            {children}
        </div>,
        document.getElementById('modal')
    )
}

export {Modal}