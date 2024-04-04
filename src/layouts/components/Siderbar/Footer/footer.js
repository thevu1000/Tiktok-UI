import React from 'react';
import classNames from 'classnames/bind';
import styles from './Footer.module.scss';

const cx = classNames.bind(styles);

function Footer() {
    const footers = [
        {
            id: 'company',
            header: 'Company',
            buttons: [
                {
                    id: 'about',
                    title: 'About',
                    href: '/about',
                },
                {
                    id: 'newsroom',
                    title: 'Newsroom',
                    href: '/newsroom',
                },
                {
                    id: 'contact',
                    title: 'Contact',
                    href: '/contact',
                },
                {
                    id: 'careers',
                    title: 'Careers',
                    href: '/careers',
                },
            ],
        },
        {
            id: 'programs',
            header: 'Programs',
            buttons: [
                {
                    id: 'tiktok-for-good',
                    title: 'TikTok for Good',
                    href: '/tiktok-for-good',
                },
                // Thêm các nút còn lại tương tự
            ],
        },
        // Thêm các nhóm footer khác nếu cần
    ];

    return (
        <footer className={cx('wrapper')}>
            {footers.map((footer) => (
                <div key={footer.id}>
                    <h4 className={cx('list-header')}>{footer.header}</h4>
                    <div className={cx('list-link-container')}>
                        {footer.buttons.map((button) => (
                            <a className={cx('footer-btn')} key={button.id} href={button.href}>
                                {button.title}
                            </a>
                        ))}
                    </div>
                </div>
            ))}
            <p>© 2024 Base on Tiktok</p>
        </footer>
    );
}

export default Footer;
