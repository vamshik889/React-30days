
import React, { createContext, useContext, useState } from 'react'

export const ModalContext = createContext();

export const Context = ({children}) => {

    const [isModalOpen,setIsModalOpen] = useState(false);

    const openModal = ()=>{
        setIsModalOpen(true)
    }
    const closeModal = ()=>{
        setIsModalOpen(false)
    }

  return (
    <ModalContext.Provider value={{isModalOpen,openModal,closeModal}}>
        {children}
    </ModalContext.Provider>

  )
}

export const useModalContext = ()=>useContext(ModalContext)