import { useState } from "react"
import http from "../../utils/http"
import InfoIcon from "./InfoIcon"

function FormPredict({  
    isloading, setIsloading, setPrediction
}) {

    const [form, setForm] = useState({
        "Age": 0,
        "Gender": 0,
        "Heart rate": 0,
        "Systolic blood pressure": 0,
        "Diastolic blood pressure": 0,
        "Blood sugar": 0,
        "CK-MB": 0,
        "Troponin": 0,
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
            const formData = {
                ...form,
                "Gender": form.Gender === "Man" ? 0 : 1,
                "Age": Number(form.Age),
                "Heart rate": Number(form["Heart rate"]),
                "Systolic blood pressure": Number(form["Systolic blood pressure"]),
                "Diastolic blood pressure": Number(form["Diastolic blood pressure"]),
                "Blood sugar": Number(form["Blood sugar"]),
                "CK-MB": Number(form["CK-MB"]),
                "Troponin": Number(form["Troponin"])
            }
            console.log("Sending data:", formData);
            const response = await http.post("/predict-heart-attack", formData)
            const { data } = response.data
            console.log("data:", data);
            setPrediction(data);
        } catch (error) {
            console.error("Error:", error);
        } finally {
            setIsloading(false)
        }
    }

    return <form onSubmit={handleSubmit} className="grid-cols-2 grid gap-5">
        <fieldset className="fieldset">
            <legend className="fieldset-legend">Age <InfoIcon description="Patient's age in years. Used to assess the risk of heart disease that increases with age." /></legend>
            <input type="number" className="input" placeholder="Age" value={form.Age} name="Age" onChange={handlerOnChange} />
        </fieldset>
        <fieldset className="fieldset">
            <legend className="fieldset-legend">Gender <InfoIcon description="Patient's gender. Males and females have different risks of heart disease." /></legend>
            <select className="select" value={form.Gender} name="Gender" onChange={handlerOnChange}>
                <option>Man</option>
                <option>Woman</option>
            </select>
        </fieldset>
        <fieldset className="fieldset">
            <legend className="fieldset-legend">Heart rate <InfoIcon description="Number of heartbeats per minute (bpm). Abnormal heart rate can indicate heart health problems." /></legend>
            <input type="number" className="input" placeholder="Heart rate" value={form["Heart rate"]} name="Heart rate" onChange={handlerOnChange} />
        </fieldset>
        <fieldset className="fieldset">
            <legend className="fieldset-legend">Systolic blood pressure <InfoIcon description="Blood pressure when the heart pumps (top number). High pressure can increase the risk of heart disease." /></legend>
            <input type="number" className="input" placeholder="Systolic blood pressure" value={form["Systolic blood pressure"]} name="Systolic blood pressure" onChange={handlerOnChange} />
        </fieldset>
        <fieldset className="fieldset">
            <legend className="fieldset-legend">Diastolic blood pressure <InfoIcon description="Blood pressure when the heart is at rest (bottom number). Normal values are important for cardiovascular health." /></legend>
            <input type="number" className="input" placeholder="Diastolic blood pressure" value={form["Diastolic blood pressure"]} name="Diastolic blood pressure" onChange={handlerOnChange} />
        </fieldset>
        <fieldset className="fieldset">
            <legend className="fieldset-legend">Blood sugar <InfoIcon description="Blood glucose level (mg/dL). High blood sugar can indicate diabetes which increases the risk of heart disease." /></legend>
            <input type="number" className="input" placeholder="Blood sugar" value={form["Blood sugar"]} name="Blood sugar" onChange={handlerOnChange} />
        </fieldset>
        <fieldset className="fieldset">
            <legend className="fieldset-legend">CK-MB <InfoIcon description="Heart-specific enzyme that increases when myocardial damage occurs. High values can indicate a heart attack." /></legend>
            <input type="number" className="input" placeholder="CK-MB" value={form["CK-MB"]} name="CK-MB" onChange={handlerOnChange} />
        </fieldset>
        <fieldset className="fieldset">
            <legend className="fieldset-legend">Troponin <InfoIcon description="Protein released when heart damage occurs. High troponin is an important marker for heart attack diagnosis." /></legend>
            <input type="number" className="input" placeholder="Troponin" value={form["Troponin"]} name="Troponin" onChange={handlerOnChange} />
        </fieldset>

        <button className="btn btn-neutral mt-4" disabled={isloading}>{
            isloading ? "Loading..." : "Predict Heart Attack"
        }</button>
    </form>
}

export default FormPredict