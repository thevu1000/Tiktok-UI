import axios from "axios";

const httpRequest = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL,
    headers: {
        'X-RapidAPI-Key': '85d45a4031mshef586547de7ab07p193f43jsn612806e8dc6c',
        'X-RapidAPI-Host': 'tiktok-download-video1.p.rapidapi.com'
    }
});

export const get = async (path, option) => {
    const response = await httpRequest.get(path, option);
    return response.data;
};

export default httpRequest;
