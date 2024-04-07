import config from '~/config';

import { HeaderOnly } from '~/layouts';

import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Upload from '~/pages/Upload';
import Profile from '~/pages/Profile';
import Live from '~/pages/Live';
import Video from '~/pages/Video';
import VideoLayout from '~/layouts/VideoPageLayout/VideoPageLayout';

const publicRoute = [
    { path: config.routes.home, component: Home },
    { path: config.routes.following, component: Following },
    { path: config.routes.profile, component: Profile },
    { path: config.routes.upload, component: Upload, layout: HeaderOnly },
    { path: config.routes.live, component: Live },
    { path: config.routes.video, component: Video, layout: VideoLayout },
];

const privateRoute = {};

export { privateRoute, publicRoute };
