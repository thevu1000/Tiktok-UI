import classNames from 'classnames/bind';
import styles from './following.module.scss';
import PageLoading from '~/components/PageLoading';
import VideoScroll from '~/components/VideoScroll/VideoScroll';
import * as Feed from '~/services/feed'
import { useEffect, useState } from 'react';

const cx = classNames.bind(styles)

function Following() {
    const [isLoading, setIsLoading] = useState(true);
    const [results, setResults] = useState([]) 

    useEffect(() => {
        const fetchApi = async () => {
            const result = await Feed.videoByKey()
            setResults(result.videos)
            setIsLoading(false)
        }

        fetchApi();
    }, [])
    console.log(results);

    return (
        <div className={cx('following')}>
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

export default Following;
