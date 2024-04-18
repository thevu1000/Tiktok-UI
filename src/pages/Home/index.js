import classNames from 'classnames/bind';
import styles from './home.module.scss';
import VideoScroll from '~/components/VideoScroll/VideoScroll';
import PageLoading from '~/components/PageLoading';
import * as Feed from '~/services/feed';
import { useEffect, useState } from 'react';

const cx = classNames.bind(styles);

function Home() {
    const [isLoading, setIsLoading] = useState(true);
    const [results, setResults] = useState([]);

    useEffect(() => {
        const fetchApi = async () => {
            const result = await Feed.videoByRegion();
            setResults(result);
            setIsLoading(false);
        };

        fetchApi();
    }, []);

    return (
        <div className={cx('home')}>
            {isLoading ? (
                <PageLoading className={cx('PageLoading')} />
            ) : (
                results.map((video, index) => (
                    <VideoScroll data={video} key={index} />
                ))
            )}
        </div>
    );
}

export default Home;
