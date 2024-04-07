import * as httpRequest from '~/utils/htppRequest';

export const getVideo = async (url) => {
    try {
        const res = await httpRequest.get(process.env.REACT_APP_BASE_URL, {
            params: {
                url,
            },
        });
        return res.data;
    } catch (error) {
        console.log(error);
    }
};

export const getComment = async (url) => {
    try {
        const res = await httpRequest.get('comment/list', {
            params: {
                url,
            },
        });
        return res.data;
    } catch (error) {
        console.log(error);
    }
};
