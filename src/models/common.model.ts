import { Dispatch, SetStateAction } from "react"

export interface IToggleReturns {
    isOpen: boolean,
    setIsOpen: Dispatch<SetStateAction<boolean>>,
    open: () => void,
    close: () => void,
    toggle: () => void
}