import HeadlessTippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import styles from './search.module.scss';
import AccountItem from '~/components/AccountItem';
import { SearchIcon } from '~/components/icons';
import React, { useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faSpinner } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function Search() {
    const [searchValue, setSearchValue] = useState('');
    const [searchResult, setSearchResult] = useState([]);
    const [showResult, setShowResult] = useState(true);
    const [loading, setLoading] = useState(false);

    const inputRef = useRef();

    const url = `https://tiktok-download-video1.p.rapidapi.com/searchUser?keywords=${encodeURIComponent(searchValue)}&count=10&cursor=0`;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key':
                '6c30af2e9cmshdc6c2239b426c58p1b952ajsnd7a471086ce6',
            'X-RapidAPI-Host': 'tiktok-download-video1.p.rapidapi.com',
        },
    };

    useEffect(() => {
        if (!searchValue.trim()) {
            setSearchResult([])
            return;
        }

        setLoading(true);

        fetch(url, options)
            .then((res) => res.json())
            .then((res) => {
                console.log(res.data.user_list);
                setSearchResult(res.data.user_list);
                setLoading(false)
            })
            .catch(() => {
                setLoading(false)
            });
    // eslint-disable-next-line
    }, [searchValue]);

    const handleClear = () => {
        setSearchValue('');
        setSearchResult([]);
        inputRef.current.focus();
    };

    const handleShowResult = () => {
        setShowResult(false);
    };

    return (
        <HeadlessTippy
            interactive
            visible={showResult && searchResult.length > 0}
            render={(attrs) => (
                <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                    <PopperWrapper>
                        <h4 className={cx('search-label')}>Tài Khoản</h4>
                        {searchResult.map((result, index) => (
                            <AccountItem key={index} data={result.user}/>
                        ))}
                    </PopperWrapper>
                </div>
            )}
            onClickOutside={handleShowResult}
        >
            <div className={cx('search')}>
                <input
                    ref={inputRef}
                    value={searchValue}
                    placeholder="Tìm kiếm tài khoản và video..."
                    spellCheck="false"
                    onChange={(e) => setSearchValue(e.target.value)}
                    onFocus={() => setShowResult(true)}
                />

                {!!searchValue && !loading && (
                    <button className={cx('clear')} onClick={handleClear}>
                        <FontAwesomeIcon icon={faCircleXmark} />
                    </button>
                )}

                {loading && <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />}

                <button className={cx('search-btn')}>
                    <SearchIcon />
                </button>
            </div>
        </HeadlessTippy>
    );
}

export default Search;
