import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import styles from './menu.module.scss';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import MenuItem from './MenuItems';
import Header from './Header';
import { useState } from 'react';

const cx = classNames.bind(styles);

function Menu({ children, items= [] }) {

    const [history, setHistory] = useState([{data: items}])
    const current = history[history.length - 1]

    const renderItem = () => {
        return current.data.map((item, index) => {
            const isParent = !!item.children
            return <MenuItem key={index} data={item} onClick={() => {
                if (isParent) {
                    setHistory((prev) => [...prev, item.children]);
                }
            }}/>
        });
    }

    return (
        <Tippy
            delay={[0, 700]}
            interactive
            placement="bottom-end"
            render={(attrs) => (
                <div className={cx('menu-list')} tabIndex="-1" {...attrs}>
                    <PopperWrapper classNames={cx('menu-popper')}>
                        {history.length > 1 && <Header  title='Ngôn ngữ' onBack={() => {
                            setHistory((prev) => prev.slice(0, prev.length - 1))
                        }}/>}
                        {renderItem()}
                    </PopperWrapper>
                </div>
            )}
            onHide={() => setHistory(prev => prev.slice(0,1))}
        >
            {children}
        </Tippy>
    );
}

export default Menu;
