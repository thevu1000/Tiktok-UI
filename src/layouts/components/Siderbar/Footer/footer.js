import React from 'react';
import classNames from 'classnames/bind';
import styles from './Footer.module.scss';

const cx = classNames.bind(styles);

function Footer() {
    const footers = [
        {
            header: 'Company',
            buttons: [
                {
                    title: 'About',
                    href: '/about',
                },
                {
                    title: 'Newsroom',
                    href: '/newsroom',
                },
                {
                    title: 'Contact',
                    href: '/contact',
                },
                {
                    title: 'Careers',
                    href: '/careers',
                },
            ],
        },
        {
            header: 'Programs',
            buttons: [
                {
                    title: 'TikTok for Good',
                    href: '/tiktok-for-good',
                },
                {
                    title: 'Advertise',
                    href: '/advertise',
                },
                {
                    title: 'TikTok LIVE',
                    href: '/tiktok-live',
                },
                {
                    title: 'Creator Networks',
                    href: '/creator-networks',
                },
                {
                    title: 'Developers',
                    href: '/developers',
                },
                {
                    title: 'Transparency',
                    href: '/transparency',
                },
                {
                    title: 'TikTok Rewards',
                    href: '/tiktok-rewards',
                },
                {
                    title: 'TikTok Embeds',
                    href: '/tiktok-embeds',
                },
            ],
        },
        {
            header: 'Terms & Policies',
            buttons: [
                {
                    title: 'Help',
                    href: '/help',
                },
                {
                    title: 'Safety',
                    href: '/safety',
                },
                {
                    title: 'Terms',
                    href: '/terms',
                },
                {
                    title: 'Privacy Policy',
                    href: '/privacy',
                },
                {
                    title: 'Privacy Center',
                    href: '/privacy-center',
                },
                {
                    title: 'Creator Portal',
                    href: '/creator-portal',
                },
                {
                    title: 'Community Guidelines',
                    href: '/community-guidelines',
                },
            ],
        },
    ];

    return (
        <footer className={cx('wrapper')}>
            {footers.map((footer, index) => (<>
                    <h4 className={cx('list-header')}>{footer.header}</h4>
                    <div className={cx('list-link-container')}>
                        {footer.buttons.map((button, buttonIndex) => (
                            <a className={cx('footer-btn')} key={buttonIndex} href={button.href}>
                                {button.title}
                            </a>
                        ))}
                    </div>
                    </>
            ))}

        <p>© 2024 Base on Tiktok</p>
        </footer>
    );
}

export default Footer;
