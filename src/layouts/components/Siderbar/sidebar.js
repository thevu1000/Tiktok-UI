import React, { useEffect, useRef } from 'react';
import classNames from 'classnames/bind';
import styles from './sidebar.module.scss';
import Menu, { MenuItem } from './Menu';
import {
    HomeIcon,
    UserGroupIcon,
    LiveIcon,
    HomeActiveIcon,
    LiveActiveIcon,
    UserGroupActiveIcon,
} from '~/components/icons';
import config from '~/config';
import PerfectScrollbar from 'perfect-scrollbar';
import 'perfect-scrollbar/css/perfect-scrollbar.css';
import SuggestAccount from './SuggestAccount';
import Footer from './Footer';

const cx = classNames.bind(styles);

function SiderBar() {
    const sidebarRef = useRef(null);

    useEffect(() => {
        const sidebar = sidebarRef.current;
        const ps = new PerfectScrollbar(sidebar, {
            suppressScrollX: true,
        });

        sidebar.style.overflowY = 'hidden';

        sidebar.addEventListener('mouseenter', () => {
            sidebar.style.overflowY = 'auto';
        });

        sidebar.addEventListener('mouseleave', () => {
            setTimeout(() => {
                sidebar.style.overflowY = 'hidden';
            }, 100);
        });

        return () => {
            ps.destroy();
        };
    }, []);

    return (
        <aside className={cx('wrapper')} ref={sidebarRef}>
            <Menu>
                <MenuItem
                    data-testid='abc'
                    title="For you"
                    to={config.routes.home}
                    icon={<HomeIcon />}
                    activeIcon={<HomeActiveIcon />}
                />
                <MenuItem
                    title="Following"
                    to={config.routes.following}
                    icon={<UserGroupIcon />}
                    activeIcon={<UserGroupActiveIcon />}
                />
                <MenuItem
                    title="Live"
                    to={config.routes.live}
                    icon={<LiveIcon />}
                    activeIcon={<LiveActiveIcon />}
                />
            </Menu>

            <SuggestAccount />
            <Footer />
        </aside>
    );
}

export default SiderBar;
