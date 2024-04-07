import classNames from 'classnames/bind';
import styles from './Comment.module.scss';
import Image from '~/components/image';
import Button from '~/components/Button';

const cx = classNames.bind(styles);

function Comment({ data }) {
    return (
        <div className={cx('comment-item')}>
            <div className={cx('avatar-contain')}>
                <Image className={cx('avatar')} src={data.user.avatar} />
            </div>

            <Button
                to={`/@${data.user.unique_id}`}
                className={cx('viewer-info')}
            >
                <h4 className={cx('viewer-nickname')}>{data.user.nickname}</h4>
                <h4 className={cx('viewer-comment')}>{data.text}</h4>

                <p className={cx('date-and-rep')}>
                    <span className={cx('date')}>3-26</span>
                    <span className={cx('rep')}>Reply</span>
                </p>
            </Button>
        </div>
    );
}

export default Comment;
