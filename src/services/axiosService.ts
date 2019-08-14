import axiosStatic from "axios";

declare const API_URL: string;

export const axios = axiosStatic.create({baseURL: API_URL, withCredentials: true});