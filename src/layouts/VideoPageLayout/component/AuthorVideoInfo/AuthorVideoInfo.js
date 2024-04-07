// AuthorVideoInfo.js
import React, { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './AuthorVideoInfo.module.scss';
import Image from '~/components/image';
import { faItunesNote } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { SaveIcon, CommentIcon, LikeIcon } from '~/components/icons';
import FormatNumber from '~/components/FormatNumber';
import FormatText from '~/components/FormatText';

const cx = classNames.bind(styles);

function AuthorVideoInfo({ data, comment, onCopied }) {
    const currentURL = window.location.href;
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText(currentURL).then(() => {
            setCopied(true);
            onCopied('Copied!');
            setTimeout(() => {
                setCopied(false);
                onCopied('');
            }, 3000); // 1 giây
        });
    };

    return (
        <div className={cx('content-contain')}>
            <div className={cx('author')}>
                <div className={cx('content-info')}>
                    <div className={cx('content-author')}>
                        <div className={cx('author-avatar')}>
                            <Image
                                className={cx('avatar')}
                                src={data.author.avatar}
                            />
                        </div>
                        <div className={cx('author-name')}>
                            <h2>{data.author.nickname}</h2>
                        </div>
                    </div>
                    <div className={cx('content-title')}>
                        <FormatText text={data.title} />
                    </div>
                    <div className={cx('content-music')}>
                        <FontAwesomeIcon
                            className={cx('icon')}
                            icon={faItunesNote}
                        />
                        {data.music_info.title}
                    </div>
                </div>
                <div className={cx('content-stats')}>
                    <div className={cx('btn-action')}>
                        <LikeIcon className={cx('action-icon')} />
                    </div>
                    <p>{FormatNumber(data.digg_count)}</p>

                    <div className={cx('btn-action')}>
                        <CommentIcon className={cx('action-icon')} />
                    </div>
                    <p>{FormatNumber(data.comment_count)}</p>

                    <div className={cx('btn-action')}>
                        <SaveIcon className={cx('action-icon')} />
                    </div>
                    <p>{FormatNumber(data.collect_count)}</p>
                </div>

                <div className={cx('content-link')}>
                    <input
                        readOnly
                        className={cx('link-input')}
                        value={currentURL}
                    />
                    <button className={cx('copy-btn')} onClick={handleCopy}>
                        Copy Link
                    </button>
                </div>
            </div>
            {copied && <div className={cx('copied-message')}>Copied!</div>}
        </div>
    );
}

export default AuthorVideoInfo;
