import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faHeartPulse, faDroplet, faUser, faUserDoctor, faFloppyDisk, faRotateRight, faInfoCircle } from '@fortawesome/free-solid-svg-icons'

function ResultHeartAttack({ result, onReset }) {

    let percentage = 0;
    percentage = parseFloat(result.probability);
        

    if (isNaN(percentage)) percentage = 0;

    const isHighRisk = result.prediction == 1 ? true : false;
    const riskColorClass = isHighRisk ? "text-red-500" : "text-green-500";
    const riskStrokeColor = isHighRisk ? "#EF4444" : "#22C55E";
    const riskText = isHighRisk ? "HIGH RISK" : "LOW RISK";
    const riskDescription = isHighRisk
        ? "There are indicators associated with a higher heart attack risk. These results suggest your lifestyle is supporting a healthy heart. Keep maintaining these habits"
        : "There are indicators associated with a lower heart attack risk. These results suggest your lifestyle is supporting a healthy heart. Keep maintaining these habits.";

    const radius = 40;
    const circumference = Math.PI * radius;
    const strokeDashoffset = circumference - ((percentage / 100) * circumference);

    return (
        <div className="w-full max-w-md mx-auto bg-gray-900 text-gray-100 p-6 rounded-3xl shadow-2xl font-sans relative overflow-hidden">

            <div className="flex items-center mb-6 z-10 relative">
                <button onClick={onReset} className="btn btn-circle btn-ghost btn-sm mr-2 text-white">
                    <FontAwesomeIcon icon={faArrowLeft} className="w-5 h-5" />
                </button>
                <span className="text-lg font-bold text-white mx-auto pr-8">Analysis Result</span>
            </div>

            <div className="flex flex-col items-center justify-center mb-8 relative">
                <div className="relative w-48 h-28 overflow-hidden">

                    <svg viewBox="0 0 100 55" className="w-full h-full text-gray-800">
                        <path 
                            d="M 10 50 A 40 40 0 0 1 90 50" 
                            fill="none" 
                            stroke="currentColor" 
                            strokeWidth="10" 
                            strokeLinecap="round" 
                        />
                    </svg>

                    <svg viewBox="0 0 100 55" className="w-full h-full absolute top-0 left-0">
                        <path
                            d="M 10 50 A 40 40 0 0 1 90 50"
                            fill="none"
                            stroke={riskStrokeColor}
                            strokeWidth="10"
                            strokeLinecap="round"
                            strokeDasharray={circumference}
                            strokeDashoffset={strokeDashoffset}
                            className="transition-all duration-1000 ease-out"
                        />
                    </svg>
                    <div className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 -translate-y-2 ${riskColorClass}`}>
                        <FontAwesomeIcon icon={faHeartPulse} className="w-8 h-8 animate-pulse" />
                    </div>
                </div>
                
                <div className="text-center mt-2">
                    <h1 className={`text-5xl font-extrabold ${riskColorClass} tracking-tighter`}>{percentage.toFixed(0)}%</h1>
                    <p className="text-gray-500 text-xs tracking-widest uppercase mt-1">HEART ATTACK RISK</p>
                </div>
                <div className="mt-4 px-4 py-1.5 rounded-full bg-gray-800 border border-gray-700">
                    <span className={`text-sm font-bold ${riskColorClass}`}>{riskText}</span>
                </div>
            </div>

            <p className="text-center text-gray-400 text-sm mb-8 leading-relaxed px-4">
                {riskDescription}
            </p>

            <div className="mb-8">
                <h3 className="text-white font-bold mb-4">Key Factors</h3>
                <div className="grid grid-cols-2 gap-3">
                    <div className="bg-gray-800 p-4 rounded-2xl border border-gray-700">
                        <div className="flex items-center space-x-2 text-gray-400 mb-2">
                            <FontAwesomeIcon icon={faHeartPulse} className="w-4 h-4" />
                            <span className="text-xs">Blood Pressure</span>
                        </div>
                        <p className="text-xl font-bold text-white mb-1">
                            {result.inputData?.["Systolic blood pressure"]}/{result.inputData?.["Diastolic blood pressure"]} <span className="text-xs font-normal text-gray-500">Sys/Dia</span>
                        </p>
                        {(result.inputData?.["Systolic blood pressure"] > 130 || result.inputData?.["Diastolic blood pressure"] > 80) &&
                            <span className="px-2 py-0.5 bg-red-900/30 text-red-500 text-[10px] rounded border border-red-900/50">High</span>
                        }
                    </div>

                    <div className="bg-gray-800 p-4 rounded-2xl border border-gray-700">
                        <div className="flex items-center space-x-2 text-gray-400 mb-2">
                            <FontAwesomeIcon icon={faDroplet} className="w-4 h-4" />
                            <span className="text-xs">Blood Sugar</span>
                        </div>
                        <p className="text-xl font-bold text-white mb-1">
                            {result.inputData?.["Blood sugar"] || "?"} <span className="text-xs font-normal text-gray-500">mg/dL</span>
                        </p>
                        {result.inputData?.["Blood sugar"] > 140 &&
                            <span className="px-2 py-0.5 bg-red-900/30 text-red-500 text-[10px] rounded border border-red-900/50">High</span>
                        }
                    </div>

                    <div className="bg-gray-800 p-4 rounded-2xl border border-gray-700">
                        <div className="flex items-center space-x-2 text-gray-400 mb-2">
                            <FontAwesomeIcon icon={faHeartPulse} className="w-4 h-4" />
                            <span className="text-xs">CK-MB</span>
                        </div>
                        <p className="text-xl font-bold text-white mb-1">
                            {result.inputData?.["CK-MB"] || "N/A"} <span className="text-xs font-normal text-gray-500">ng/mL</span>
                        </p>
                    </div>

                    <div className="bg-gray-800 p-4 rounded-2xl border border-gray-700">
                        <div className="flex items-center space-x-2 text-gray-400 mb-2">
                            <FontAwesomeIcon icon={faUser} className="w-4 h-4" />
                            <span className="text-xs">Age</span>
                        </div>
                        <p className="text-xl font-bold text-white mb-1">
                            {result.inputData?.Age} <span className="text-xs font-normal text-gray-500">Years</span>
                        </p>
                    </div>
                </div>
            </div>

            <div className="space-y-3">
                <div className="grid grid-cols-1 gap-3">
                    <button onClick={onReset} className="btn bg-gray-800 hover:bg-gray-700 text-white border-none rounded-2xl h-12 flex items-center justify-center space-x-2">
                        <FontAwesomeIcon icon={faRotateRight} className="w-4 h-4 text-gray-400" />
                        <span>Recalculate</span>
                    </button>
                </div>
            </div>

            <div className="mt-8 pt-4 border-t border-gray-800 text-xs text-gray-500 leading-snug flex items-start space-x-2">
                <div className="mt-0.5">
                    <FontAwesomeIcon icon={faInfoCircle} className="w-4 h-4" />
                </div>
                <span>
                    <strong>Important:</strong> This result is generated by a predictive model and is not  a medical diagnosis. Please consult a healthcare professional for medical advice.
                </span>
            </div>
        </div>
    )
}

export default ResultHeartAttack
