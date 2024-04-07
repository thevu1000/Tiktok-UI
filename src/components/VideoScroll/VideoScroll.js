import classNames from 'classnames/bind';
import styles from './VideoScroll.module.scss';
import Image from '../image/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from '../Button';
import formatNumber from '../FormatNumber';
import { faItunesNote } from '@fortawesome/free-brands-svg-icons';
import { useState, useRef, useEffect } from 'react'; // Added useEffect
import useElementOnScreen from '~/hooks/useElementOnScreen';
import {
    PlayIcon,
    PauseIcon,
    MutedIcon,
    VolumeIcon,
    LikeIcon,
    CommentIcon,
    ShareIcon,
    SaveIcon,
} from '../icons';
import FormatText from '../FormatText';

const cx = classNames.bind(styles);

function VideoScroll({ data, isFollow }) {
    const videoRef = useRef(null);
    const [isMuted, setIsMuted] = useState(false);
    const [isLoaded, setIsLoaded] = useState(false);
    const [playing, setPlaying] = useState(false);

    const [celebrate, setCelebrate] = useState(false);

    const handleLikeClick = () => {
        if (celebrate) {
            setCelebrate(false);
            data.digg_count = data.digg_count - 1;
        } else {
            setCelebrate(true);
            data.digg_count = data.digg_count + 1;
        }
    };

    const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.3,
    };
    const isVisibile = useElementOnScreen(options, videoRef);
    const onVideoClick = () => {
        if (playing) {
            videoRef.current.pause();
            setPlaying(!playing);
        } else {
            videoRef.current.play();
            setPlaying(!playing);
        }
    };
    useEffect(() => {
        if (isVisibile) {
            if (!playing) {
                videoRef.current.play();
                setPlaying(true);
            }
        } else {
            if (playing) {
                videoRef.current.pause();
                setPlaying(false);
            }
        }
    }, [isVisibile]);

    const toggleMute = () => {
        videoRef.current.muted = !videoRef.current.muted;
        setIsMuted(videoRef.current.muted);
    };

    const handleLoad = () => {
        setIsLoaded(true);
    };

    return (
        <div className={cx('recommend-list-item-container')}>
            <Image
                src={data.author.avatar}
                alt=""
                className={cx('author-avatar')}
            />
            <div className={cx('content-container')}>
                <div className={cx('content-info')}>
                    <div className={cx('author-contain')}>
                        <Button
                            className={cx('author-info')}
                            to={`/@${data.author.unique_id}`}
                        >
                            <h3 className={cx('author-id')}>
                                {data.author.nickname}
                            </h3>
                            <span className={cx('author-nickname')}>
                                {data.author.unique_id}
                            </span>
                        </Button>

                        <div className={cx('video-caption-contain')}>
                            <p className={cx('video-cap')}>
                                <FormatText text={data.title} />
                            </p>
                        </div>

                        <Button
                            className={cx('music-info')}
                            to={`/music/${data.music_info.title}`}
                        >
                            <FontAwesomeIcon
                                className={cx('music-icon')}
                                icon={faItunesNote}
                            />
                            <span className={cx('music-name')}>
                                {data.music_info.title}
                            </span>
                        </Button>
                    </div>

                    {!isFollow && (
                        <Button className={cx('follow-button')} outline>
                            Follow
                        </Button>
                    )}

                    <div className={cx('video-contain')}>
                        <div className={cx('wrapper')}>
                            <video
                                ref={videoRef}
                                className={cx('video')}
                                loop
                                onLoadedData={handleLoad}
                            >
                                <source src={data.wmplay} type="video/mp4" />
                            </video>

                            <div className={cx('custom-controls')}>
                                <button
                                    className={cx('custom-control-btn')}
                                    onClick={onVideoClick}
                                >
                                    {playing ? <PauseIcon /> : <PlayIcon />}
                                </button>

                                <button
                                    className={cx('custom-control-btn')}
                                    onClick={toggleMute}
                                >
                                    {isMuted ? <MutedIcon /> : <VolumeIcon />}
                                </button>
                            </div>
                        </div>

                        <div className={cx('action-btn')}>
                            <div
                                className={cx('icon-contain', {
                                    celebrate: celebrate,
                                })}
                                onClick={handleLikeClick}
                            >
                                <LikeIcon className={cx('action-icon')} />
                            </div>
                            <span className={cx('click-count')}>
                                {formatNumber(data.digg_count)}
                            </span>

                            <div className={cx('icon-contain')}>
                                <CommentIcon className={cx('action-icon')} />
                            </div>
                            <span className={cx('click-count')}>
                                {formatNumber(data.comment_count)}
                            </span>

                            <div className={cx('icon-contain')}>
                                <SaveIcon className={cx('action-icon')} />
                            </div>
                            <span className={cx('click-count')}>
                                {formatNumber(data.download_count)}
                            </span>

                            <div className={cx('icon-contain')}>
                                <ShareIcon className={cx('action-icon')} />
                            </div>
                            <span className={cx('click-count')}>
                                {formatNumber(data.share_count)}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default VideoScroll;
