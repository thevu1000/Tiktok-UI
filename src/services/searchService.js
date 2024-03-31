import * as httpRequest from '~/utils/htppRequest';

export const search = async (keywords, count = '3', cursor = '0') => {
    try {
        const res = await httpRequest.get('searchUser', {
            params: {
                keywords,
                count, 
                cursor
            },
        });
        return res.data;
    } catch (error) {
        console.log(error);
    }
};

