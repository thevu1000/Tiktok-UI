import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import styles from './AccountItem.module.scss';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function AccountItem({ data, className }) {
    const avatarSrc = data.avatarLarger || data.avatar;
    const userId = data.uniqueId || data.unique_id;
    return (
        <Link to={`/@${data.nickname}`} className={className ? className : cx('wrapper')}>
            <img className={cx('avatar')} src={avatarSrc} alt={userId} />
            <div className={cx('info')}>
                <h4 className={cx('username')}>
                    <span>{data.nickname}</span>
                    {data.verified && (
                        <FontAwesomeIcon
                            className={cx('check')}
                            icon={faCheckCircle}
                        />
                    )}
                </h4>

                <span className={cx('name')}>{userId}</span>
            </div>
        </Link>
    );
}

AccountItem.propTypes = { 
    data: PropTypes.object.isRequired,
    suggestClass: PropTypes.string, // Prop suggestClass để chỉ định class suggest
}

export default AccountItem;
