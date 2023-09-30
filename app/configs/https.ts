import { redirect } from "@remix-run/node";
import axios from "axios";

export const axiosHealthyApi = axios.create({
    baseURL: "http://localhost:3333/"
});

axiosHealthyApi.interceptors.request.use(
    config => {
        config.headers['Authorization'] = localStorage.getItem('access_token');
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
            return redirect('/login')
        }
    }
);