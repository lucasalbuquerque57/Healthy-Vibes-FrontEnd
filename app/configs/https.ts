import axios from "axios";

export const axiosHealthyApi = axios.create({
    baseURL: "https://healthyvibes-rest-api-back-end-production.up.railway.app"
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
        if (error.response.status == 403) {
            return window.location.assign("/login");
        } else {
            return Promise.reject(error);
        }
    }
);