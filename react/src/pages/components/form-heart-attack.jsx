import { useState } from "react"
import http from "../../utils/http"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faUser, faHeartPulse, faFlask, faStethoscope } from '@fortawesome/free-solid-svg-icons'
import InfoIcon from "./InfoIcon"

function FormPredict({
    isloading, setIsloading, setResult
}) {

    const [form, setForm] = useState({
        "Age": "",
        "Gender": "Male",
        "Heart rate": "",
        "Systolic blood pressure": "",
        "Diastolic blood pressure": "",
        "Blood sugar": "",
        "CK-MB": "",
        "Troponin": "",
    })

    const handlerOnChange = (event) => {
        const { value, name } = event.target

        setForm({
            ...form,
            [name]: value
        })
    }

    const handleSubmit = async (event) => {
        event.preventDefault()
        setIsloading(true)
        try {
            const response = await http.post("/predict-heart-attack", {
                "Age": Number(form.Age),
                "Gender": Number(form.Gender === "Male" ? 1 : 0),
                "Heart rate": Number(form["Heart rate"]),
                "Systolic blood pressure": Number(form["Systolic blood pressure"]),
                "Diastolic blood pressure": Number(form["Diastolic blood pressure"]),
                "Blood sugar": Number(form["Blood sugar"]),
                "CK-MB": Number(form["CK-MB"]),
                "Troponin": Number(form["Troponin"]),
            })
            const { data } = response.data
            console.log("Prediction result:", data);

            setResult({ ...data, inputData: form });
        } catch (error) {
            console.error(error);
        } finally {
            setIsloading(false)
        }
    }

    return (
        <div className="w-full max-w-md mx-auto bg-gray-900 text-gray-100 p-6 rounded-3xl shadow-2xl font-sans">
            <div className="mb-6">
                <div className="flex items-center mb-2">
                    <span className="text-gray-400 text-sm font-medium tracking-wide">Risk Assessment</span>
                </div>
                <h2 className="text-3xl font-bold text-white mb-2">Heart Attack Risk</h2>
                <p className="text-gray-500 text-sm leading-relaxed">
                    Enter your information below to receive an estimated assesment of potential heart attack risk.
                </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">

                <div className="space-y-3">
                    <div className="ml-0.5 flex items-center space-x-2 text-green-500 mb-1">
                        <FontAwesomeIcon icon={faUser} className="w-5 h-5" />
                        <h3 className="font-semibold text-white">Demographics</h3>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div className="form-control">
                            <label className="label ml-2 text-xs text-gray-400 pb-1 flex items-center">
                                Age
                                <InfoIcon description="Patient's age in years. Heart disease risk tends to increase with age." />
                            </label>
                            <input
                                type="number"
                                name="Age"
                                min={1}
                                value={form.Age}
                                onChange={handlerOnChange}
                                className="input input-bordered bg-gray-800 border-gray-700 text-white focus:border-green-500 focus:outline-none rounded-2xl w-full h-12"
                                placeholder="45"
                                required
                            />
                        </div>
                        <div className="form-control">
                            <label className="label ml-2 text-xs text-gray-400 pb-1 flex items-center">
                                Gender
                                <InfoIcon description="Patient's gender. Men and women have different heart disease risk profiles." />
                            </label>
                            <div className="inline-flex bg-gray-800 p-1 rounded-2xl h-12 border border-gray-700 w-full relative">
                                <button
                                    type="button"
                                    className={`flex-1 rounded-xl text-sm font-medium transition-all ${form.Gender === 'Male' ? 'bg-green-500 text-black shadow' : 'text-gray-400 hover:text-white'}`}
                                    onClick={() => setForm({ ...form, Gender: 'Male' })}
                                >
                                    Male
                                </button>
                                <button
                                    type="button"
                                    className={`flex-1 rounded-xl text-sm font-medium transition-all ${form.Gender === 'Female' ? 'bg-green-500 text-black shadow' : 'text-gray-400 hover:text-white'}`}
                                    onClick={() => setForm({ ...form, Gender: 'Female' })}
                                > Female
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="p-4 bg-gray-800 rounded-2xl border border-gray-700/50 space-y-4">
                    <div className="flex items-center space-x-2 text-green-500">
                        <FontAwesomeIcon icon={faHeartPulse} className="w-5 h-5" />
                        <h3 className="font-semibold text-white">Vitals</h3>
                    </div>

                    <div className="form-control">
                        <label className="label flex justify-between text-xs text-gray-400 pb-1">
                            <div className="flex items-center">
                                Heart Rate
                                <InfoIcon description="Heart beats per minute (bpm). Abnormal heart rate can indicate heart health issues." />
                            </div>
                            <span className="bg-gray-700 px-1.5 py-0.5 rounded text-[10px]">bpm</span>
                        </label>
                        <input
                            type="number"
                            name="Heart rate"
                            min={0}
                            value={form["Heart rate"]}
                            onChange={handlerOnChange}
                            className="input input-bordered bg-gray-950 border-gray-700 text-white focus:border-green-500 focus:outline-none rounded-xl w-full"
                            placeholder="e.g. 72"
                            required
                        />
                    </div>

                    <div className="form-control">
                        <label className="label flex justify-between text-xs text-gray-400 pb-1">
                            <div className="flex items-center">
                                Blood Pressure
                                <InfoIcon description="Systolic (top) and diastolic (bottom) blood pressure. Hypertension increases heart attack risk." />
                            </div>
                            <span className="bg-gray-700 px-1.5 py-0.5 rounded text-[10px]">mmHg</span>
                        </label>
                        <div className="flex gap-3">
                            <div className="relative flex-1">
                                <input
                                    type="number"
                                    name="Systolic blood pressure"
                                    min={0}
                                    value={form["Systolic blood pressure"]}
                                    onChange={handlerOnChange}
                                    className="input input-bordered bg-gray-950 border-gray-700 text-white focus:border-green-500 focus:outline-none rounded-xl w-full pl-3 pr-10"
                                    placeholder="Systolic"
                                    required
                                />
                                <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 text-xs pointer-events-none">Sys</span>
                            </div>
                            <div className="relative flex-1">
                                <input
                                    type="number"
                                    name="Diastolic blood pressure"
                                    min={0}
                                    value={form["Diastolic blood pressure"]}
                                    onChange={handlerOnChange}
                                    className="input input-bordered bg-gray-950 border-gray-700 text-white focus:border-green-500 focus:outline-none rounded-xl w-full pl-3 pr-10"
                                    placeholder="Diastolic"
                                    required
                                />
                                <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 text-xs pointer-events-none">Dia</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="p-4 bg-gray-800 rounded-2xl border border-gray-700/50 space-y-4">
                    <div className="flex items-center space-x-2 text-green-500">
                        <FontAwesomeIcon icon={faFlask} className="w-5 h-5" />
                        <h3 className="font-semibold text-white">Lab Results</h3>
                    </div>

                    <div className="form-control">
                        <label className="label flex justify-between text-xs text-gray-400 pb-1">
                            <div className="flex items-center">
                                Blood Sugar
                                <InfoIcon description="Blood sugar level. High blood sugar (diabetes) is a major risk factor for heart disease." />
                            </div>
                            <span className="bg-gray-700 px-1.5 py-0.5 rounded text-[10px]">mg/dL</span>
                        </label>
                        <input
                            type="number"
                            name="Blood sugar"
                            min={0}
                            value={form["Blood sugar"]}
                            onChange={handlerOnChange}
                            className="input input-bordered bg-gray-950 border-gray-700 text-white focus:border-green-500 focus:outline-none rounded-xl w-full"
                            placeholder="e.g. 95"
                            required
                        />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div className="form-control">
                            <label className="label text-xs text-gray-400 pb-1 flex items-center">
                                CK-MB
                                <InfoIcon description="CK-MB enzyme level. Increases when heart muscle damage occurs. Important indicator for diagnosis." />
                            </label>
                            <div className="relative">
                                <input
                                    type="number"
                                    name="CK-MB"
                                    value={form["CK-MB"]}
                                    onChange={handlerOnChange}
                                    className="input input-bordered bg-gray-950 border-gray-700 text-white focus:border-green-500 focus:outline-none rounded-xl w-full pr-12"
                                    placeholder="0.0"
                                    required
                                />
                                <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 text-xs">ng/mL</span>
                            </div>
                        </div>
                        <div className="form-control">
                            <label className="label text-xs text-gray-400 pb-1 flex items-center">
                                Troponin
                                <InfoIcon description="Troponin protein level. High Troponin is the most specific sign of a heart attack." />
                            </label>
                            <div className="relative">
                                <input
                                    type="number"
                                    name="Troponin"
                                    value={form.Troponin}
                                    onChange={handlerOnChange}
                                    className="input input-bordered bg-gray-950 border-gray-700 text-white focus:border-green-500 focus:outline-none rounded-xl w-full pr-12"
                                    placeholder="0.0"
                                    required
                                />
                                <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 text-xs">ng/mL</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="pt-2">
                    <button
                        className={`btn w-full rounded-2xl h-14 text-lg border-none hover:bg-green-600 transition-colors ${isloading ? 'bg-gray-600 text-gray-300' : 'bg-green-500 text-gray-900 hover:shadow-lg hover:shadow-green-500/20'
                            }`}
                        disabled={isloading}
                    >
                        {isloading ? (
                            <span className="loading loading-spinner"></span>
                        ) : (
                            <div className="flex items-center justify-center space-x-2">
                                <FontAwesomeIcon icon={faStethoscope} className="w-6 h-6" />
                                <span className="font-bold">Analyze & Predict</span>
                            </div>
                        )}
                    </button>
                </div>
            </form>
        </div>
    )
}

export default FormPredict