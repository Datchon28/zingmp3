import classNames from 'classnames/bind';
import style from './Home.module.scss';
import Banner from './Banner/Banner';
import ChooseToday from './ChooseToday/ChooseToday';
import Recently from './Recently/Recently';
import NewRelease from './NewRelease/NewRelease';
import SingerLover from './SingerLover/SingerLover';
import NewMusicEveryDay from './NewMusicEveryDay/NewMusicEveryDay';
import ChartBox from './ChartBox/ChartBox';
import ChartWeek from './ChartWeek/ChartWeek';
import Top100 from './Top100/Top100';
import NewSongs from './NewSong/NewSongs';
import XoneCorner from './XoneCorner/XoneCorner';
import RadioOustanding from './RadioOustanding/RadioOustanding';
import Partner from './Partner/Partner';
import Singers from './Singers/Singers';
import Event from './Event/Event';
import { useEffect } from 'react';

const cx = classNames.bind(style);

function Home() {
    return (
        <div className={cx('wrapper')}>
            <Banner />
            <Recently />
            <NewRelease />
            <ChooseToday />
            <SingerLover />
            <NewMusicEveryDay />
            <ChartBox />
            <ChartWeek />
            <Singers />
            <Top100 />
            <NewSongs />
            <XoneCorner />
            <RadioOustanding />
            <Event />
            <Partner />
        </div>
    );
}

export default Home;
