// Pages
import Home from '../pages/Home';
import ZingChart from '../pages/ZingChart/ZingChart';
import Following from '~/pages/Following';
import Upload from '~/pages/Upload';
import Search from '~/pages/Search';

// Layout
import config from '../config';

const publicRoutes = [
    { path: config.routes.home, component: Home },
    { path: config.routes.personal, component: Personal },
    { path: config.routes.zingchart, component: ZingChart },
    { path: config.routes.radio, component: Radio },
    { path: config.routes.following, component: Following },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
