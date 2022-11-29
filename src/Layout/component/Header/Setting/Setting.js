import classNames from 'classnames/bind';
import style from './Setting.module.scss';
import Tippy from '@tippyjs/react/headless';
import { faGear } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import SettingItems from './SettingItems';
import Hover from '../../../../components/Hover/Hover';
const cx = classNames.bind(style);

function Setting({ children, items = [] }) {
    return (
        <Tippy
            trigger="click"
            hideOnClick={true}
            interactive={true}
            placement="bottom-end"
            offset={[3, 11]}
            render={(attr) => (
                <div className={cx('wrapper')} tabIndex="-1" {...attr}>
                    <SettingItems />
                </div>
            )}
            className={cx('tippi-setting-header')}
        >
            <span className={cx('setting')}>
                <FontAwesomeIcon icon={faGear} />
            </span>
        </Tippy>
    );
}

export default Setting;
