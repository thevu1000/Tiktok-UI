import classNames from 'classnames/bind';
import styles from './VideoScroll.module.scss';
import Image from '../image/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from '../Button';
import { faItunesNote } from '@fortawesome/free-brands-svg-icons';
import { useState, useRef } from 'react';
import {
    faVolumeUp,
    faVolumeMute,
    faPlay,
    faPause,
    faBookmark,
    faComment,
    faHeart,
    faShare,
} from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function VideoScroll() {
    const videoRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [isMuted, setIsMuted] = useState(false);

    const togglePlayPause = () => {
        if (videoRef.current.paused) {
            videoRef.current.play();
            setIsPlaying(true);
        } else {
            videoRef.current.pause();
            setIsPlaying(false);
        }
    };

    const toggleMute = () => {
        videoRef.current.muted = !videoRef.current.muted;
        setIsMuted(videoRef.current.muted);
    };


    return (
        <div className={cx('recommend-list-item-container')}>
            <Image src="/" alt="" className={cx('author-avatar')} />
            <div className={cx('content-container')}>
                <div className={cx('content-info')}>
                    <div className={cx('author-contain')}>
                        <Button className={cx('author-info')} to={'/a'}>
                            <h3 className={cx('author-id')}>fujunlala666</h3>
                            <span className={cx('author-nickname')}>
                                孔融譲Pear🍐
                            </span>
                        </Button>

                        <div className={cx('video-caption-contain')}>
                            <p className={cx('video-cap')}>
                                今、とても幸せ #捏造衣装 #チャイナ服
                                #チャイナドレス #桂乃芬 #崩壊スターレイル
                                #コスプレ
                            </p>
                        </div>

                        <Button className={cx('music-info')}>
                            <FontAwesomeIcon icon={faItunesNote} />
                            <span className={cx('music-name')}>
                                Chẳng ai biết trước tương lai
                            </span>
                        </Button>
                    </div>

                    <Button className={cx('follow-button')} outline>
                        Follow
                    </Button>

                    <div className={cx('video-contain')}>
                        <div className={cx('wrapper')}>
                            <video ref={videoRef} className={cx('video')} loop>
                                <source
                                    src="https://v16m-default.akamaized.net/c9f4db62966c164705b0b178b1598645/660ef2a1/video/tos/alisg/sde/tos-alisg-pv-0037/owBECA1YEFAaHaAgEVGDURQjCfKAnkloOBYfBd/?a=0&bti=OUBzOTg7QGo6OjZAL3AjLTAzYCMxNDNg&ch=0&cr=0&dr=0&lr=all&cd=0%7C0%7C0%7C1&cv=1&br=32398&bt=16199&ds=4&ft=XE5bCqT0m7jPD12rAfW73wU2Y3yKMeF~O5&mime_type=video_mp4&qs=13&rc=M3k0bWw5cm41bzMzODgzNEBpM3k0bWw5cm41bzMzODgzNEBgMC4zMmRjZ2hgLS1kLzFzYSNgMC4zMmRjZ2hgLS1kLzFzcw%3D%3D&l=20240404123402FF8BD1F4316D222815A1&btag=e00048000&dpk=HYux5BefQDsnYshRJU8fjdxVSSf7ai5c1HW4npxwzog2aJWOqWZvC18IeTKlJ0FkGE6X6sCzAhdX1%2F65nc%2BmvEQjZ6vPGJ6%2FQkgyXQ%3D%3D&dpm=aes-256-cfb&l=20240404123402FF8BD1F4316D222815A1"
                                    type="video/mp4"
                                />
                            </video>

                            <div className={cx('custom-controls')}>
                                <button
                                    className={cx('custom-control-btn')}
                                    onClick={togglePlayPause}
                                >
                                    <FontAwesomeIcon
                                        icon={isPlaying ? faPause : faPlay}
                                    />
                                </button>
                                <button
                                    className={cx('custom-control-btn')}
                                    onClick={toggleMute}
                                >
                                    <FontAwesomeIcon
                                        icon={
                                            isMuted ? faVolumeMute : faVolumeUp
                                        }
                                    />
                                </button>
                            </div>
                        </div>

                        <div className={cx('action-btn')}>
                            <div className={cx('icon-contain')}>
                                <FontAwesomeIcon
                                    className={cx('action-icon')}
                                    icon={faHeart}
                                />
                            </div>
                            <span className={cx('click-count')}>10000</span>

                            <div className={cx('icon-contain')}>
                                <FontAwesomeIcon
                                    className={cx('action-icon')}
                                    icon={faComment}
                                />
                            </div>
                            <span className={cx('click-count')}>10000</span>

                            <div className={cx('icon-contain')}>
                                <FontAwesomeIcon
                                    className={cx('action-icon')}
                                    icon={faShare}
                                />
                            </div>
                            <span className={cx('click-count')}>10000</span>

                            <div className={cx('icon-contain')}>
                                <FontAwesomeIcon
                                    className={cx('action-icon')}
                                    icon={faBookmark}
                                />
                            </div>
                            <span className={cx('click-count')}>10000</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default VideoScroll;
