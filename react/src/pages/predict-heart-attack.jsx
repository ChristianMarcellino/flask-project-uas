import { useState } from "react"
import FormPredict from "./components/form-heart-attack"

function PredictHeartAttack() {
    const [result,setResult] = useState({
        "probability" : "Menunggu Hasil",
        "prediction" : "Menunggu Hasil"
    })
    const [isloading, setIsloading] = useState(false)
    if (isloading) {
        <img src="https://media.tenor.com/I9qt03YKkjQAAAAe/monkey-thinking.png" alt="" />
    }
    return (
        <div className="min-h-screen bg-base-200 flex items-center justify-center ">
            <div className="bg-base-200 border rounded-2xl border-black flex items-center justify-center shadow-xl ">
                <div className=" p-5 rounded-3xl max-w-6xl">
                    <FormPredict isloading={isloading} setIsloading={setIsloading} setResult={setResult}/>
                </div>
                <div className="p-5">
                    <p>Potensi Serangan Jantung : {result.probability} </p>
                    <p>Hasil Prediksi : {result.prediction}</p>
                </div>
            </div>
        </div>
    )
}

export default PredictHeartAttack