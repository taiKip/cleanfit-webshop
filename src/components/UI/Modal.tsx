import React, { ReactNode } from 'react'
import ReactDOM from 'react-dom'
import classes from './Modal.module.css'
const Modal = ({children,toggle}:{children:ReactNode,toggle:()=>void}) => {
    return ReactDOM.createPortal (
        <>
            <div className={classes.backdrop} onClick={toggle}>

            </div>
            <div className={classes.modal}>
{children}
            </div>
        </>,
        document.getElementById("portal")!
    )
}

export default Modal
