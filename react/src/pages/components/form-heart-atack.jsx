import { useState } from "react"
import http from "../../utils/http"
import InfoIcon from "../components/InfoIcon"
import { TooltipProvider } from "../components/TooltipContext"


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
            const response = await http.post("/predict-heart-attack", form)
            const { data } = response.data
            console.log("data:", data)
            setPrediction(data);
        } catch (error) {
            console.log(error);
        } finally {
            setIsloading(false)
        }
    }

    return <TooltipProvider>
    <form onSubmit={handleSubmit} className="grid-cols-2 grid gap-5">
        <fieldset class="fieldset">
            <legend class="fieldset-legend">Age <InfoIcon description="Patient's age in years. Used to assess the risk of heart disease that increases with age." /></legend>
            <input type="number" className="input" placeholder="Age" value={form.Age} name="Age" onChange={handlerOnChange} />
        </fieldset>
        <fieldset className="fieldset">
            <legend className="fieldset-legend">Gender <InfoIcon description="Patient's gender. Males and females have different risks of heart disease." /></legend>
            <select defaultValue="Pick a Gender" className="select" placeholder="Gender" value={form.Gender} name="Gender" onChange={handlerOnChange}>
                <option disabled={true}>Pick a Gender</option>
                <option>Man</option>
                <option>Woman</option>
            </select>
        </fieldset>
        <fieldset class="fieldset">
            <legend class="fieldset-legend">Heart rate <InfoIcon description="Number of heartbeats per minute (bpm). Abnormal heart rate can indicate heart health problems." /></legend>
            <input type="number" className="input" placeholder="Heart rate" value={form["Heart rate"]} name="Heart rate" onChange={handlerOnChange} />
        </fieldset>
        <fieldset class="fieldset">
            <legend class="fieldset-legend">Systolic blood pressure <InfoIcon description="Blood pressure when the heart pumps (top number). High pressure can increase the risk of heart disease." /></legend>
            <input type="number" className="input" placeholder="Systolic blood pressure" value={form["Systolic blood pressure"]} name="Systolic blood pressure" onChange={handlerOnChange} />
        </fieldset>
        <fieldset class="fieldset">
            <legend class="fieldset-legend">Diastolic blood pressure <InfoIcon description="Blood pressure when the heart is at rest (bottom number). Normal values are important for cardiovascular health." /></legend>
            <input type="number" className="input" placeholder="Diastolic blood pressure" value={form["Diastolic blood pressure"]} name="Diastolic blood pressure" onChange={handlerOnChange} />
        </fieldset>
        <fieldset class="fieldset">
            <legend class="fieldset-legend">Blood sugar <InfoIcon description="Blood glucose level (mg/dL). High blood sugar can indicate diabetes which increases the risk of heart disease." /></legend>
            <input type="number" className="input" placeholder="Blood sugar" value={form["Blood sugar"]} name="Blood sugar" onChange={handlerOnChange} />
        </fieldset>
        <fieldset class="fieldset">
            <legend class="fieldset-legend">CK-MB <InfoIcon description="Heart-specific enzyme that increases when myocardial damage occurs. High values can indicate a heart attack." /></legend>
            <input type="number" className="input" placeholder="CK-MB" value={form["CK-MB"]} name="CK-MB" onChange={handlerOnChange} />
        </fieldset>
        <fieldset class="fieldset">
            <legend class="fieldset-legend">Troponin <InfoIcon description="Protein released when heart damage occurs. High troponin is an important marker for heart attack diagnosis." /></legend>
            <input type="number" className="input" placeholder="Troponin" value={form["Troponin"]} name="Troponin" onChange={handlerOnChange} />
        </fieldset>

        <button className="btn btn-neutral mt-4" disabled={isloading}>{
            isloading ? "Loading..." : "Predict Heart Attack"
        }</button>
    </form>
    </TooltipProvider>
}

export default FormPredict