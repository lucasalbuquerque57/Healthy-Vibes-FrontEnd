import { redirect } from "@remix-run/node";
import axios from "axios";

export const axiosHealthyApi = axios.create({
    baseURL: "http://127.0.0.1:3333"
});

axiosHealthyApi.interceptors.request.use(
    config => {
        config.headers['Authorization'] = localStorage.getItem("access-token") || "JWT eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1MDI0ZDg4MWZmYjliMGM1MGFkMTJiOSIsImlhdCI6MTY5NjQ2OTE0MCwiZXhwIjoxNjk2NTU1NTQwfQ.lEx4tbv3vRIlPYfD3x3fdE6Ne8bYCMkEMHh0g_Nb4JI";
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
        return error
        /* if (error.response.status == 403) {
            window.location.assign("/login");
            return redirect('/login')
        } */
    }
);