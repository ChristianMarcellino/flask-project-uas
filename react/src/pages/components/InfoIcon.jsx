import { useState } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons'

function InfoIcon({ description }) {
    const [showTooltip, setShowTooltip] = useState(false)

    return (
        <span
            className="relative inline-block ml-2"
            onMouseEnter={() => setShowTooltip(true)}
            onMouseLeave={() => setShowTooltip(false)}
        >
            <button
                type="button"
                className="text-gray-400 hover:text-green-500 transition-colors"
            >
                <FontAwesomeIcon icon={faInfoCircle} className="w-4 h-4" />
            </button>
            {showTooltip && (
                <div className="absolute left-1/2 transform -translate-x-1/2 bottom-full mb-3 p-4 text-xs font-medium text-gray-100 bg-gray-800 border border-gray-600 rounded-2xl shadow-2xl z-50 pointer-events-none text-center">
                    {description}
                    <div className="absolute -bottom-1.5 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-gray-800 border-b border-r border-gray-600 rotate-45"></div>
                </div>
            )}
        </span>
    )
}

export default InfoIcon