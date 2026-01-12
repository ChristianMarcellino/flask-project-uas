import axios from "axios";

const http = axios.create({
    baseURL: "https://wawan1235-heartattack.hf.space/api",
    headers: {
        Accept: "application/json"
    }
})  

export default http;
