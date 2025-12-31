import { useState } from "react"
    
function InfoIcon({ description, id }) {
    const [showTooltip, setShowTooltip] = useState(false)

    return (
        <span 
            className="relative inline-block"
            onMouseEnter={() => setShowTooltip(true)}
            onMouseLeave={() => setShowTooltip(false)}
        >
            <button
                type="button"
                className="inline-flex items-center justify-center w-5 h-5 text-xs font-bold bg-gray-600 rounded-full hover:bg-black cursor-help"
            > ?
            </button>
            {showTooltip && (
                <div className="absolute left-0 mt-2 w-48 p-2 text-sm text-blue-100 bg-gray-500 border border-black rounded shadow-lg z-10">
                    {description}
                </div>
            )}
        </span>
    )
}

export default InfoIcon