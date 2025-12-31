import { useTooltip } from "./TooltipContext"
    
function InfoIcon({ description, id }) {
    const { openTooltip, setOpenTooltip } = useTooltip()
    const isOpen = openTooltip === id

    const handleClick = (e) => {
        e.preventDefault()
        setOpenTooltip(isOpen ? null : id)
    }

    return (
        <span className="relative inline-block">
            <button
                type="button"
                className="inline-flex items-center justify-center w-5 h-5 text-xs font-bold bg-gray-600 rounded-full hover:bg-black cursor-help"
                onClick={handleClick}
            > ?
            </button>
            {isOpen && (
                <div className="absolute left-0 mt-2 w-48 p-2 text-sm text-blue-100 bg-gray-500 border border-black rounded shadow-lg z-10">
                    {description}
                </div>
            )}
        </span>
    )
}

export default InfoIcon