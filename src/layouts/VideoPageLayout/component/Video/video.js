import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom
import classNames from 'classnames/bind';
import styles from './Video.module.scss';
import { CloseIcon, MoreIcon } from '~/components/icons';

const cx = classNames.bind(styles);

function Video({ data }) {
    const navigate = useNavigate(); // Access the navigate function

    const handleGoBack = () => {
        navigate(-1); // Go back to the previous page
    };

    return (
        <div className={cx('video-contain')}>
            <div className={cx('searchbar-contain')}>
                <div
                    className={cx('searchbar-action-btn')}
                    onClick={handleGoBack}
                >
                    {' '}
                    {/* Add onClick event to the CloseIcon */}
                    <CloseIcon className={cx('action-icon')} />
                </div>

                <div className={cx('search-input')}>
                    <input
                        placeholder="Find Related Video"
                        className={cx('input')}
                    />
                </div>
                <div className={cx('searchbar-action-btn')}>
                    <MoreIcon className={cx('action-icon')} />
                </div>
            </div>
            <div className={cx('video-blur-background')}>
                <div className={cx('video-wrapper')}>
                    <video
                        className={cx('img')}
                        autoPlay
                        loop
                        alt="/"
                        src={data.play}
                    />
                </div>
                <div className={cx('overlay')}>
                    <img
                        alt="/"
                        className={cx('blur-background')}
                        src={data.origin_cover}
                    />
                </div>
            </div>
        </div>
    );
}

export default Video;
