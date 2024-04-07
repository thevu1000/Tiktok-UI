import classNames from 'classnames/bind';
import styles from './home.module.scss';
import VideoScroll from '~/components/VideoScroll/VideoScroll';
import * as Feed from '~/services/feed'
import { useEffect, useState } from 'react';

const cx = classNames.bind(styles)

function Home() {
    const [results, setResults] = useState([]) 

    useEffect(() => {
        const fetchApi = async () => {
            const result = await Feed.videoByRegion()
            setResults(result)
        }

        fetchApi();
    }, [])

    return (
        <div className={cx('home')}>
           {results.map((video, index) => {
            return (
                <VideoScroll data={video} key={index}/>
            )
            })}
        </div>
    );
}

export default Home;
