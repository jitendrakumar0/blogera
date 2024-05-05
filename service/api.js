import axios from 'axios'

const BASEURL = 'https://blog-backend-w6gs.onrender.com';

export const GETApi = async (endpoint)=> {
    const data = await axios.get(`${BASEURL}${endpoint}`, {
        headers: {
            "Content-Type": "application/json; charset=utf-8",
            Accept: "application/json",
        },
    })
    return data;
}