import classNames from 'classnames/bind';
import style from './RadioOustanding.module.scss';

import axios from 'axios';
import { Responsive } from '../../../Layout/DefaultLayout/DefaultLayout';
import { Fragment, useContext, useState, useEffect } from 'react';
import RadioOustandingItem from './RadioOustandingItem';

const cx = classNames.bind(style);

function RadioOustanding() {
    const { isTablet } = useContext(Responsive);
    const [radio, setRadio] = useState([])
    const url = 'https://apizingmp3.vercel.app/api/home?page={ivestream}'

    useEffect(() => {
        const fetchData = async () => {
            await axios.get(url).then((data) => {
                setRadio(data.data.data.items[11].items)
            });
        };
        fetchData();
    },[url])

    console.log(radio);

    return (
        <div className={cx('wrapper')}>
            <h3 className={cx('title')}>Radio Nổi Bật</h3>
            <div className={cx('list')}>
                {isTablet ? (
                    <Fragment>
                        {radio.splice(0,5).map((item, index) => (
                            <RadioOustandingItem
                            key={index}
                            title={item.title}
                            avatar={item.host.thumbnail}
                            thumb={item.thumbnail}
                            />
                        ))}
                    </Fragment>
                ) : (
                    <Fragment>
                        {radio.splice(0,7).map((item, index) => (
                            <RadioOustandingItem
                            key={index}
                            title={item.title}
                            avatar={item.host.thumbnail}
                            thumb={item.thumbnail}
                            />
                        ))}
                    </Fragment>        
                   
                )}
            </div>
        </div>
    );
}

export default RadioOustanding;
