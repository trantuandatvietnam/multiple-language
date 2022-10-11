import { useCallback, useState } from "react";
import { IToggleReturns } from "../../models/common.model";

function useToggle(initial: boolean = false): IToggleReturns {
    const [isOpen, setIsOpen] = useState<boolean>(initial);
    const open = useCallback(() => setIsOpen(true), []);
    const close = useCallback(() => setIsOpen(false), []);
    const toggle = useCallback(() => setIsOpen(preState => !preState), []);

    return { isOpen, setIsOpen, open, close, toggle }
}

export default useToggle