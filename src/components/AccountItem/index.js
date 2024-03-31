import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import styles from './AccountItem.module.scss';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function AccountItem({ data }) {
    return (
        <Link to={`/@${data.nickname}`} className={cx('wrapper')}>
            <img className={cx('avatar')} src={data.avatarLarger} alt={data.uniqueId} />
            <div className={cx('info')}>
                <h4 className={cx('username')}>
                    <span>{data.uniqueId}</span>
                    {data.verified && (
                        <FontAwesomeIcon
                            className={cx('check')}
                            icon={faCheckCircle}
                        />
                    )}
                </h4>

                <span className={cx('name')}>{data.nickname}</span>
            </div>
        </Link>
    );
}

AccountItem.propTypes = { 
    data: PropTypes.object.isRequired,
}

export default AccountItem;
