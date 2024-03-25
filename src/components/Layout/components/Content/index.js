import React, { useEffect, useState } from 'react';

function Video() {
    const [videoInfo, setVideoInfo] = useState(null);

    useEffect(() => {
        const fetchVideoInfo = async () => {
            const url = 'https://tiktok-api6.p.rapidapi.com/video/details?video_id=7343848249444355330';
            const options = {
                method: 'GET',
                headers: {
                    'X-RapidAPI-Key': '6c30af2e9cmshdc6c2239b426c58p1b952ajsnd7a471086ce6',
                    'X-RapidAPI-Host': 'tiktok-api6.p.rapidapi.com'
                }
            };

            try {
                const response = await fetch(url, options);
                const result = await response.json();
                console.log(result);
                setVideoInfo(result);
            } catch (error) {
                console.error(error);
            }
        };

        fetchVideoInfo();
    }, []);

    return (
        <div>
            {/* Hiển thị videoInfo */}
            {videoInfo && (
                <div>
                    <h2>Thông tin Video</h2>
                    <p>Mô tả: {videoInfo.details.description}</p>
                    <p>Tác giả: {videoInfo.details.author.nickname}</p>
                    <p>Số lượt xem: {videoInfo.details.statistics.number_of_plays}</p>
                    <p>Số lượt thả tim: {videoInfo.details.statistics.number_of_hearts}</p>
                    <p>Số bình luận: {videoInfo.details.statistics.number_of_comments}</p>
                    <p>Số chia sẻ: {videoInfo.details.statistics.number_of_reposts}</p>
                    <video controls>
                        <source src={videoInfo.details.download_url} type="video/mp4" />
                    </video>
                </div>
            )}
        </div>
    );
}

export default Video;
