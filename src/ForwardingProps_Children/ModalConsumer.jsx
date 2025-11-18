import React, { useState } from 'react'
import Modal1 from './Modal1'

const ModalConsumer = () => {
    const [isOpen,setIsOpen] = useState(false)
    const handleClose = ()=>{
setIsOpen(false)
    }
  return (
    <div>
        <Modal1 title="This is Delete Modal" onClose={handleClose} isOpen={isOpen} data="Delete modal">
            <p>Are you sure you want to delete?</p>
            <button>Yes</button>
            <button>Cancel</button>
        </Modal1>
        
         <Modal1 title="This is Confirmation Modal" onClose={handleClose} isOpen={isOpen} data="Confirm modal">
            <p>Confirm Changes?</p>
            <button>Confirm</button>  
            <button>Cancel</button>
        </Modal1>
    </div>
  )
}

export default ModalConsumer