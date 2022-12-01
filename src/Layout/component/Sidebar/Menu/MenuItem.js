import classNames from 'classnames/bind';
import style from './Menu.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlay } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';
import { useContext, useRef, useState } from 'react';
import { Check } from '../Sidebar.js';

const cx = classNames.bind(style);

function MenuItem({ title, to, icon, onClick }) {
    const checked = useContext(Check);
    console.log();

    const scrollToTop = (e) => {
        window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
    };

    return (
        <NavLink end to={to} className={(nav) => cx('menu-item', { active: nav.isActive })} onClick={scrollToTop}>
            <li className={cx('list-control-item')}>
                <span className={cx('icon-item')}>{icon}</span>
                <span className={cx('list-control-item-title', checked === true && 'hide')}>{title}</span>
                <span className={cx('icon-hover')}>
                    <FontAwesomeIcon icon={faCirclePlay} />
                </span>
            </li>
        </NavLink>
    );
}

export default MenuItem;
