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

export const followingUser = async (user_id, count,time='0') => {
    try {
        const res = await httpRequest.get('userFollowingList', {
            params: {
                user_id,
                count,
                time,
            },
        });
        return res.data;
    } catch (error) {
        console.log(error)
    }
}