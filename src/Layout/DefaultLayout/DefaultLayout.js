import classNames from 'classnames/bind';
import style from './DefaultLayout.module.scss';
import Header from '../component/Header';
import Sidebar from '../component/Sidebar';
import SongBox from '../component/SongBox/SongBox';
import { createContext } from 'react';
import { useMediaQuery } from 'react-responsive';

const cx = classNames.bind(style);

export const Responsive = createContext();

function DefaultLayout({ children }) {
    const isTablet = useMediaQuery({ query: '(max-width: 1024px) and (min-width: 740px)' });
    const isMobile = useMediaQuery({ query: '(max-width: 740px)' });

    return (
        <Responsive.Provider value={{ isTablet, isMobile }}>
            <div className={cx('wrapper')}>
                <Sidebar />
                <div className={cx('container')}>
                    <Header />
                    <div className={cx('content')}>{children}</div>
                </div>
                <SongBox />
            </div>
        </Responsive.Provider>
    );
}

export default DefaultLayout;
