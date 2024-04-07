import classNames from 'classnames/bind';
import styles from './following.module.scss';
import VideoScroll from '~/components/VideoScroll/VideoScroll';
import * as Feed from '~/services/feed'
import { useEffect, useState } from 'react';

const cx = classNames.bind(styles)

function Following() {
    const [results, setResults] = useState([]) 

    useEffect(() => {
        const fetchApi = async () => {
            const result = await Feed.videoByKey()
            setResults(result.videos)
        }

        fetchApi();
    }, [])
    console.log(results);

    return (
        <div className={cx('following')}>
           {results.map((video, index) => {
            return (
                <VideoScroll data={video} key={index} isFollow={true}/>
            )
            })}
        </div>
    );
}

export default Following;
