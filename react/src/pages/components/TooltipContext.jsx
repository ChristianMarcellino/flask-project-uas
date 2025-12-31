import { createContext, useState, useContext } from "react"

const TooltipContext = createContext()

export function TooltipProvider({ children }) {
    const [openTooltip, setOpenTooltip] = useState(null)

    return (
        <TooltipContext.Provider value={{ openTooltip, setOpenTooltip }}>
            {children}
        </TooltipContext.Provider>
    )
}

export function useTooltip() {
    const context = useContext(TooltipContext)
    if (!context) {
        throw new Error("useTooltip must be used within TooltipProvider")
    }
    return context
}
