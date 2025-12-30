from flask import Flask, jsonify, request
from flask_cors import CORS
import pandas as pd
import joblib

app = Flask(__name__)
CORS(app)

columns = [
    "Age",
    "Gender",
    "Heart rate",
    "Systolic blood pressure",
    "Diastolic blood pressure",
    "Blood sugar",
    "CK-MB",
    "Troponin"
]

loaded_model = joblib.load('models/heartattack.pkl')

@app.route("/api/predict-heart-attack", methods=["POST"])
def predict():
    data = request.get_json()

    x_input = pd.DataFrame([data], columns = columns)

    prediction = loaded_model.predict(x_input)

    return(prediction.tolist())


if __name__ == '__main__':
    app.run(debug=True)

