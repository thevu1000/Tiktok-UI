import * as httpRequest from '~/utils/htppRequest';

 const userInfo = async (unique_id) => {
    try {
        const res = await httpRequest.get('userInfo', {
            params: {
                unique_id
            },
        });
        return res.data;
    } catch (error) {
        console.log(error)
    }
}

export default userInfo;