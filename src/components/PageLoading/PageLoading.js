import styles from './PageLoading.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function PageLoading() {
    return (
        <div className={cx('loader')}>
            <div
                className={cx('justify-content-center', 'jimu-primary-loading')}
            ></div>
        </div>
    );
}

export default PageLoading;
