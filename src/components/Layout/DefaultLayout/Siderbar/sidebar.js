import classNames from "classnames/bind";
import styles from './sidebar.module.scss'

const cx = classNames.bind(styles)

function SiderBar() {
    return <aside className={cx('wrapper')}>
        <h2>SiderBar</h2>
    </aside>
}

export default SiderBar;
