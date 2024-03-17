import classNames from 'classnames/bind';
import Header from '../components/Header/header';
import styles from './DefaultLayout.module.scss'
import SiderBar from './Siderbar/sidebar';

const cx = classNames.bind(styles)

function DefaultLayout({ children }) {
    return (
        <div className={cx('wrapper')}>
            <Header />
            <div className={cx('container')}>
                <SiderBar />
                <div className={cx('content')}>{children}</div>
            </div>
        </div>
    );
}

export default DefaultLayout;
