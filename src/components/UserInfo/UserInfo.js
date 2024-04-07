import classNames from 'classnames/bind';
import styles from './UserInfo.module.scss';
import Image from '../image';
import Button from '../Button';
import formatNumber from '../FormatNumber';
import { ShareIconOutLine, MoreIcon } from '../icons';

const cx = classNames.bind(styles);

function UserInfo({ data }) {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('user-info')}>
                <div className={cx('avatar')}>
                    <Image src={data.user.avatarThumb} />
                </div>

                <div className={cx('title-contain')}>
                    <h2 className={cx('title')}>{data.user.uniqueId}</h2>
                    <h4 className={cx('sub-title')}>{data.user.nickname}</h4>
                    <Button outline className={cx('messages-btn')}>
                        Messages
                    </Button>
                </div>
            </div>

            <div className={cx('user-count')}>
                <div className={cx('count-contain')}>
                    <strong className={cx('count-number')}>
                        {formatNumber(data.stats.followingCount)}
                    </strong>
                    <p className={cx('count-title')}>Following</p>
                </div>

                <div className={cx('count-contain')}>
                    <strong className={cx('count-number')}>
                        {formatNumber(data.stats.followerCount)}
                    </strong>
                    <p className={cx('count-title')}>Followers</p>
                </div>

                <div className={cx('count-contain')}>
                    <strong className={cx('count-number')}>
                        {formatNumber(data.stats.heartCount)}
                    </strong>
                    <p className={cx('count-title')}>Likes</p>
                </div>
            </div>

            <h2 className={cx('user-bio')}>{data.user.signature}</h2>

            <div className={cx('action-btn-contain')}>
                <ShareIconOutLine className={cx('action-btn')} />
                <MoreIcon className={cx('action-btn')} />
            </div>
        </div>
    );
}

export default UserInfo;
