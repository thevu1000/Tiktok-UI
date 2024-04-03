import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import styles from './DefaultLayout.module.scss'
import SiderBar from '../components/Siderbar/sidebar';

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

DefaultLayout.propTypes = {
    children: PropTypes.node.isRequired,
}

export default DefaultLayout;
