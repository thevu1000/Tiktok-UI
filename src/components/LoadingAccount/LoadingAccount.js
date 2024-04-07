import React from 'react';
import classNames from 'classnames/bind';
import styles from './LoadingAccount.module.scss';

const cx = classNames.bind(styles);

const LoadingAccount = () => {
    return (
        <div className={cx('wrapper')}>
            <div
                className={cx('avatar')}
                style={{ width: '32px', height: '32px' }}
            ></div>
            <div className={cx('info-contain')}>
                <div
                    className={cx('nickname')}
                    style={{ width: '107px', height: '12px' }}
                ></div>
                <div
                    className={cx('id')}
                    style={{ width: '66px', height: '12px' }}
                ></div>
            </div>
        </div>
    );
};

export default LoadingAccount;
