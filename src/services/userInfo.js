import * as httpRequest from '~/utils/htppRequest';

export const userInfo = async (unique_id) => {
    try {
        const res = await httpRequest.get('user/info', {
            params: {
                unique_id,
            },
        });
        return res.data;
    } catch (error) {
        console.log(error);
    }
};

export const userVideo = async (unique_id, count = '35') => {
    try {
        const res = await httpRequest.get('user/posts', {
            params: {
                unique_id,
                count,
            },
        });
        return res.data;
    } catch (error) {
        console.log(error);
    }
};
