import axios from "axios";

const httpRequest = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL,
    headers: {
        'X-RapidAPI-Key': 'ca6c49e3e0mshbc8b6c3ccc7f3a1p107376jsnfdf6c1d539f4',
        'X-RapidAPI-Host': 'tiktok-download-video1.p.rapidapi.com'
    }
});

export const get = async (path, option) => {
    const response = await httpRequest.get(path, option);
    return response.data;
};

export default httpRequest;
