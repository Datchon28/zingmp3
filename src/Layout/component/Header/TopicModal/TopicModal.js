import classNames from 'classnames/bind';
import style from './TopicModal.module.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Modal from '../../../../components/Modal/Modal';
import Hover from '../../../../components/Hover/Hover';
import { faClose } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

const cx = classNames.bind(style);
const colortopic = [
    {
        darkColor: [
            {
                nameColor: 'Tối',
                color: 'https://zmp3-static.zmdcdn.me/skins/zmp3-v6.1/images/theme/dark.jpg',
            },
            {
                nameColor: 'Tím',
                color: 'https://zmp3-static.zmdcdn.me/skins/zmp3-v6.1/images/theme/purple.jpg',
            },
            {
                nameColor: 'Xanh Đậm',
                color: 'https://zmp3-static.zmdcdn.me/skins/zmp3-v6.1/images/theme/blue.jpg',
            },
            {
                nameColor: 'Xanh biển',
                color: 'https://zmp3-static.zmdcdn.me/skins/zmp3-v6.1/images/theme/blue-light.jpg',
            },
            {
                nameColor: 'Xanh lá',
                color: 'https://zmp3-static.zmdcdn.me/skins/zmp3-v6.1/images/theme/green.jpg',
            },
            {
                nameColor: 'Nâu',
                color: 'https://zmp3-static.zmdcdn.me/skins/zmp3-v6.1/images/theme/brown.jpg',
            },
            {
                nameColor: 'Hồng',
                color: 'https://zmp3-static.zmdcdn.me/skins/zmp3-v6.1/images/theme/pink.jpg',
            },
            {
                nameColor: 'Đỏ',
                color: 'https://zmp3-static.zmdcdn.me/skins/zmp3-v6.1/images/theme/red.jpg',
            },
        ],
    },
    {
        lightColor: [
            {
                nameColor: 'Sáng',
                color: 'https://zmp3-static.zmdcdn.me/skins/zmp3-v6.1/images/theme/light.jpg    ',
            },
            {
                nameColor: 'Xám',
                color: 'https://zmp3-static.zmdcdn.me/skins/zmp3-v6.1/images/theme/gray.jpg',
            },
            {
                nameColor: 'Xanh Nhạt',
                color: 'https://zmp3-static.zmdcdn.me/skins/zmp3-v6.1/images/theme/green-light.jpg',
            },
            {
                nameColor: 'Hồng Cánh Sen',
                color: 'https://zmp3-static.zmdcdn.me/skins/zmp3-v6.1/images/theme/pink-light.jpg',
            },
        ],
    },
];

function TopicModal() {
    const [isOpen, setIsOpen] = useState();
    const topicModal = document.querySelector('.main');

    const handleOpenModal = () => {
        setIsOpen(false);
    };

    if (isOpen === false) {
        topicModal.remove();
    }

    return (
        <Modal classNames={cx('main')}>
            <div className={cx('wrapper')}>
                <div className={cx('content')}>
                    <div className={cx('header')}>
                        <h3 className={cx('title')}>Giao Diện</h3>
                        <Hover tilte="Đóng">
                            <span className={cx('close-btn')} onClick={handleOpenModal}>
                                <FontAwesomeIcon icon={faClose} />
                            </span>
                        </Hover>
                    </div>

                    <div className={cx('body')}>
                        <div className={cx('topic')}>
                            <h3 className={cx('topic-name')}>Màu Tối</h3>
                            <div className={cx('list-color')}>
                                {colortopic[0].darkColor.map((item, index) => (
                                    <div className={cx('item')} key={index}>
                                        <figure className={cx('topic-color')}>
                                            <img alt="mau" src={item.color} />
                                        </figure>
                                        <div className={cx('color-name')}>
                                            <span>{item.nameColor}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className={cx('topic')}>
                            <h3 className={cx('topic-name')}>Màu Sáng</h3>
                            <div className={cx('list-color')}>
                                {colortopic[1].lightColor.map((item, index) => (
                                    <div className={cx('item')} key={index}>
                                        <figure className={cx('topic-color')}>
                                            <img alt="mau" src={item.color} />
                                        </figure>
                                        <div className={cx('color-name')}>
                                            <span>{item.nameColor}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Modal>
    );
}

export default TopicModal;
