import classNames from 'classnames/bind';
import styles from './home.module.scss';
import VideoScroll from '~/components/VideoScroll/VideoScroll';

const cx = classNames.bind(styles)

function Home() {
    return (
        <div className={cx('home')}>
           <VideoScroll/>
        </div>
    );
}

export default Home;
