import * as httpRequest from '~/utils/htppRequest';

export const videoByRegion = async (region, count) => {
    try {
        const res = await httpRequest.get('feed/list', {
            params: {
                region: 'JP',
                count: '20',
            },
        });
        return res.data;
    } catch (error) {
        console.log(error);
    }
};

export const videoByKey = async (
    keywords,
    count,
    cursor,
    region,
    publish_time,
    sort_type,
) => {
    try {
        const res = await httpRequest.get('feed/search', {
            params: {
                keywords: 'Cosplay コスプレイ',
                count: '10',
                cursor: '0',
                region: 'JP',
                publish_time: '0',
                sort_type: '0',
            },
        });
        return res.data;
    } catch (error) {
        console.log(error);
    }
};
