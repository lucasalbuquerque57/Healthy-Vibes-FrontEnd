import axios from "axios";

export const axiosHealthyApi = axios.create({
    baseURL: "http://127.0.0.1:3333"
});

axiosHealthyApi.interceptors.request.use(
    config => {
        config.headers['Authorization'] = localStorage.getItem("access-token") || "";
        return config;
    },
    error => {
        return Promise.reject(error);
    }
)

axiosHealthyApi.interceptors.response.use(
    response => {
        return response;
    },
    error => {
        console.log(error)
        if (error.response.status == 403) {
            return window.location.assign("/login");

        }
    }
);