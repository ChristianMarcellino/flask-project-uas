import axios from "axios";

const https = axios.create({
    baseURL: "http://127.0.0.1:5000/api",
    headers: {
        Accept: "application/json"
    }
})  

export default https;
