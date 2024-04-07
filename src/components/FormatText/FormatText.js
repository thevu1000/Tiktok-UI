import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../Button';
import styles from './FormatText.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function FormatText({ text }) {
    const navigate = useNavigate();

    const handleButtonClick = (hashtag) => {
        const cleanedHashtag = hashtag.substring(1);
        navigate(`/tag/${cleanedHashtag}`);
    };

    // Tách các từ và giữ lại các hashtag
    const words = text.split(/\s+(?=#)/);

    return words.map((word, index) => {
        if (word.startsWith('#')) {
            const hashtag = word;
            return (
                <Button
                    className={cx('hashtag')}
                    onClick={() => handleButtonClick(hashtag)}
                    key={index}
                >
                    {word}
                </Button>
            );
        } else {
            return <span key={index}>{word}</span>;
        }
    });
}

export default FormatText;
