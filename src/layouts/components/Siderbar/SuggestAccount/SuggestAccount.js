import React, { useState, useEffect } from 'react';
import classNames from 'classnames/bind';
import styles from './SuggestAccount.module.scss';
import AccountItem from '~/components/AccountItem';
import * as searchService from '~/services/searchService';
import Button from '~/components/Button';

const cx = classNames.bind(styles);

function SuggestAccount({userId='6536692104587689986'}) {
    const [results, setResults] = useState([]);
    const [loadMore, setLoadMore] = useState(10)
    const [isLoading, setIsLoading] = useState(false);


    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            
            const results = await searchService.followingUser(userId, loadMore);
            setResults(results.followings);

            setIsLoading(false);
        };
        fetchData();
    }, [userId, loadMore]);

    const handleLoadMore = () => {
        setLoadMore(prevLoadMore => prevLoadMore + 5);
    }

    return (
        <div className={cx('wrapper')}>
            <h4 className={cx('title')}>Suggested Accounts</h4>
            
            {results.map((result, index) => (
                <AccountItem
                    className={cx('suggest-item')}
                    key={index}
                    data={result}
                />
            ))}
            
            {isLoading ? <div className={cx('loader')}></div> : <Button className={cx('more')} onClick={handleLoadMore}>
                More
            </Button>}
        </div>
    );
}


export default SuggestAccount;