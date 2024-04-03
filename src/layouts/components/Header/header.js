import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCircleQuestion,
    faCoins,
    faEarthAsia,
    faEllipsisVertical,
    faGear,
    faKeyboard,
    faPlus,
    faRightFromBracket,
    faUser,
} from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import { Link } from 'react-router-dom';
import Tippy from '@tippyjs/react';

import config from '~/config'
import Button from '~/components/Button';
import styles from './header.module.scss';
import images from '~/assets/images';
import Search from '~/layouts/components/Search';
import Menu from '~/components/Popper/menu';
import 'tippy.js/dist/tippy.css';
import { UploadIcon, MessageIcon, InboxIcon } from '~/components/icons';
import Image from '~/components/image';

const cx = classNames.bind(styles);

const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faEarthAsia} />,
        title: 'Tiếng Việt',
        children: {
            title: 'Ngôn Ngữ',
            data: [
                {
                    code: 'en',
                    title: 'English',
                },
                {
                    code: 'vi',
                    title: 'Tiếng Việt',
                }
            ],
        },
    },

    {
        icon: <FontAwesomeIcon icon={faCircleQuestion} />,
        title: 'Phản hồi và trợ giúp',
        to: '/feedback',
    },

    {
        icon: <FontAwesomeIcon icon={faKeyboard} />,
        title: 'Phím tắt bàn phím',
    },
];

function Header() {
    
    const currentUser = false;

    

    const UserMenu = [
        {
            icon: <FontAwesomeIcon icon={faUser} />,
            title: 'Xem hồ sơ',
            to: '/@hoaa',
        },
        {
            icon: <FontAwesomeIcon icon={faCoins} />,
            title: 'Nhận xu',
            to: '/coin',
        },
        {
            icon: <FontAwesomeIcon icon={faGear} />,
            title: 'Thiết lập',
            to: '/setting',
        },
        ...MENU_ITEMS,
        {
            icon: <FontAwesomeIcon icon={faRightFromBracket} />,
            title: 'Đăng xuất',
            to: '/logout',
            separate: true,
        }
    ];

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <Link to={config.routes.home} className={cx('logo')}>
                    <img src={images.logo} alt="TikTok" />
                </Link>
                
                <Search />

                <div className={cx('actions')}>
                    {currentUser ? (
                        <>
                            <Tippy
                                delay={200}
                                offset={[10,10]}
                                content="Đăng video"
                                placement="bottom"
                            >
                                <button className={cx('action-btn')}>
                                    <UploadIcon/>
                                </button>
                            </Tippy>

                            <Tippy
                                delay={200}
                                offset={[10,10]}
                                content="Tin Nhắn"
                                placement="bottom"
                            >
                                <button className={cx('action-btn')}>
                                    <MessageIcon/>
                                </button>
                            </Tippy>

                            <Tippy
                                delay={200}
                                offset={[10,10]}
                                content="Hộp Thư"
                                placement="bottom"
                            >
                                <button className={cx('action-btn')}>
                                    <InboxIcon/>
                                    <span className={cx('badge')}>12</span>
                                </button>
                            </Tippy>
                        </>
                    ) : (
                        <>
                            <Button
                                Text
                                leftIcon={
                                    <FontAwesomeIcon
                                        className={cx('plus')}
                                        icon={faPlus}
                                    />
                                }
                            >
                                Tải Lên
                            </Button>
                            <Button primary to='/'>Đăng Nhập</Button>
                        </>
                    )}
                    <Menu items={currentUser ? UserMenu : MENU_ITEMS}>
                        {currentUser ? (
                            <Image
                                className={cx('user-avatar')}
                                alt="Đào Lê Phương Hoa"
                                
                                src="https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/4b85df94ddbc913a995d4d721e417580.jpeg?lk3s=a5d48078&x-expires=1711278000&x-signature=lisuqBOB8v8hGpLWLMb17azT4p0%3D"
                            />
                        ) : (
                            <button className={cx('more-button')}>
                                <FontAwesomeIcon icon={faEllipsisVertical} />
                            </button>
                        )}
                    </Menu>
                </div>
            </div>
        </header>
    );
}

export default Header;
