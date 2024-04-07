import React, { useRef, useState } from 'react';
import classNames from 'classnames/bind';
import styles from './VideoItem.module.scss';
import Button from '../Button';
import formatNumber from '~/components/FormatNumber';
import { PlayIconOutline } from '../icons';
import FormatText from '../FormatText';

const cx = classNames.bind(styles);

function VideoItem({ data, user }) {
    const [playing, setPlaying] = useState(false);
    const [isHover, setIsHover] = useState(false);
    const videoRef = useRef(null);

    const handleMouseOver = () => {
        setPlaying(true);
    };

    const handleMouseOut = () => {
        setIsHover(false);
        if (videoRef.current) {
            setPlaying(false); // Khi rời chuột, dừng video
        }
    };

    return (
        <Button
            to={`/@${user.user.uniqueId}/video/${data.video_id}`}
            className={cx('user-video', { 'pin-tagged': data.tagged })} // Sử dụng classNames để kiểm soát class 'pin-tagged'
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
            style={{ order: data.is_top ? -1 : 0 }} // Thiết lập order theo điều kiện
        >
            <div className={cx('video-contain')}>
                {playing ? (
                    <video
                        className={cx('video-play')}
                        ref={videoRef}
                        autoPlay={playing}
                        loop={!isHover}
                    >
                        <source src={data.wmplay} type="video/mp4" />
                    </video>
                ) : (
                    <div className={cx('video')}>
                        <img
                            src={data ? data.origin_cover : ''}
                            alt="video_thumbnail"
                        />
                    </div>
                )}
            </div>

            <div className={cx('video-title')}>
                <p>
                    <FormatText text={data.title} />
                </p>
            </div>
            <div className={cx('video-view')}>
                <PlayIconOutline className={cx('icon')} />
                <p>{formatNumber(data.play_count)}</p>
            </div>

            {data.is_top !== 0 && (
                <div primary className={cx('pin-tag')}>
                    Pinned
                </div>
            )}
        </Button>
    );
}

export default VideoItem;
