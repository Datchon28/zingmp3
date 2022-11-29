import axios from "axios";

export const baseApi = axios.create({
    baseURL= 'https://apizingmp3.herokuapp.com/',
})