import React, { useEffect } from 'react'

const Modal = ({closeModal}) => {

    useEffect(()=>{
        document.body.style.overflowY = "hidden";

        return()=>{document.body.style.overflowY = "scroll"};
    })
  return (
    <div className='modal-wrapper' onClick={closeModal}>
        <div className='modal-container' >
            <div className='heading-container'>
            <h3>
                Are you sure you want to delete the post?
            </h3>
            <button onClick={closeModal} className='close-btn'>X</button>
            </div>
           
            <p>This post is being deleted,once deleted it cannot be retreived</p>
        </div>
    </div>
  )
}

export default Modal