import { useState } from "react"
import FormPredict from "./components/form-heart-atack"

function PredictHeartAttack() {
    const [predict,setPrediction] = useState(null)
    const [isloading, setIsloading] = useState(false)
    if (isloading) {
        <img src="https://media.tenor.com/I9qt03YKkjQAAAAe/monkey-thinking.png" alt="" />
    }
    return (
        <div className="min-h-screen bg-base-200 flex items-center justify-center ">
            <div className="bg-base-200 border rounded-2xl border-black flex items-center justify-center shadow-xl ">
                <div className=" p-5 rounded-3xl max-w-6xl">
                    <FormPredict isloading={isloading} setIsloading={setIsloading} setPrediction={setPrediction}/>
                </div>
                <div className="p-5">
                    Hasil Prediksi : sepertinya {predict === 0 ?"negatif" : "Positif"}
                </div>
            </div>
        </div>
    )
}

export default PredictHeartAttack