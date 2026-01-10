import { useEffect, useState } from "react"
import FormPredict from "./components/form-heart-attack"
import ResultHeartAttack from "./components/ResultHeartAttack"

function PredictHeartAttack() {
    const defaultResult = {
        "probability": null,
        "prediction": null
    };

    const [result, setResult] = useState(defaultResult)
    const [isloading, setIsloading] = useState(false)

    const hasResult = result.probability !== null && result.probability !== "Menunggu Hasil";

    const handleReset = () => {
        setResult(defaultResult);
    }

    useEffect(() => {
        document.title = "Predict Heart Attack Risk";
      }, [])

    return (
        <div className="min-h-screen bg-slate-800 flex flex-col items-center justify-center p-4">

            <div className="w-full max-w-md">
                {hasResult ? (
                    <ResultHeartAttack result={result} onReset={handleReset} />
                ) : (
                    <FormPredict
                        isloading={isloading}
                        setIsloading={setIsloading}
                        setResult={setResult}
                    />
                )}
            </div>
        </div>
    )
}

export default PredictHeartAttack