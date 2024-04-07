// VideoPageLayout.js
import classNames from 'classnames/bind';
import styles from './VideoPageLayou.module.scss';
import VideoComponent from './component/Video'; // Đổi tên Video thành VideoComponent để tránh xung đột
import Comment from './component/Comment/Comment';
import * as VideoService from '~/services/Video'; // Đổi tên Video thành VideoService để tránh xung đột
import { useEffect, useState } from 'react';
import AuthorVideoInfo from './component/AuthorVideoInfo';
import PageLoading from '~/components/PageLoading';

const cx = classNames.bind(styles);

function VideoPageLayout() {
    const [videoInfo, setVideoInfo] = useState([]);
    const [videoCommentData, setVideoCommentData] = useState([]);
    const [id, setId] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    const [copiedMessage, setCopiedMessage] = useState('');

    useEffect(() => {
        const currentUrl = window.location.href;
        const parts = currentUrl.split('/');
        const currentId = parts[parts.length - 1];
        setId(currentId);

        const fetchData = async (videoId) => {
            let fetchedVideoData;
            try {
                const videoData = await VideoService.getVideo(videoId);
                const videoComment = await VideoService.getComment(videoId);
                setVideoCommentData(videoComment.comments);
                fetchedVideoData = videoData;
                console.log(fetchedVideoData);
            } catch (error) {
                console.error('Error fetching video:', error);
            }

            setVideoInfo(fetchedVideoData);
            setIsLoading(false); // Kết thúc quá trình tải dữ liệu
        };

        fetchData(currentId);
    }, []);

    const handleCopiedMessage = (message) => {
        setCopiedMessage(message);
    };

    return (
        <>
            {isLoading ? (
                <PageLoading className={cx('PageLoading')} />
            ) : (
                <div className={cx('wrapper')}>
                    <div className={cx('content')}>
                        <VideoComponent
                            className={cx('Video')}
                            data={videoInfo}
                        />
                    </div>
                    {videoCommentData.length > 0 && (
                        <div className={cx('content-right')}>
                            <AuthorVideoInfo
                                className={cx('Author')}
                                data={videoInfo}
                                onCopied={handleCopiedMessage}
                            />
                            {videoCommentData.map((comment, index) => {
                                return <Comment key={index} data={comment} />;
                            })}
                        </div>
                    )}
                    {copiedMessage && <div>{copiedMessage}</div>}
                </div>
            )}
        </>
    );
}

export default VideoPageLayout;
