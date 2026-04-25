'use client'
import { createContext, useContext, useState } from 'react'
import { LeadFormModal } from '../ui/LeadFormModal'

const ModalContext = createContext({
  openModal: () => {}
})

export const useModal = () => useContext(ModalContext)

export function ModalProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <ModalContext.Provider value={{ openModal: () => setIsOpen(true) }}>
      {children}
      <LeadFormModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </ModalContext.Provider>
  )
}
