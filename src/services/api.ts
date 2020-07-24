import axios from "axios";

const api = axios.create({
  baseURL:
    "https://api.openweathermap.org/data/2.5/onecall?exclude=hourly,current,minutely&units=metric&lang=pt_br&",
});

export default api;
