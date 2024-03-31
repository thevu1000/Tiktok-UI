import axios from "axios";

const httpRequest = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL,
    headers: {
        'X-RapidAPI-Key': '6c30af2e9cmshdc6c2239b426c58p1b952ajsnd7a471086ce6',
        'X-RapidAPI-Host': 'tiktok-download-video1.p.rapidapi.com'
    }
});

export const get = async (path, option) => {
    const response = await httpRequest.get(path, option);
    return response.data;
};

export default httpRequest;
