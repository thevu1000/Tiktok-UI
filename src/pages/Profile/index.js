import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import UserInfoCom from '~/components/UserInfo/UserInfo';
import classNames from 'classnames/bind';
import styles from './Profile.module.scss';
import * as User from '~/services/userInfo';
import VideoItem from '~/components/VideoItem';
import PageLoading from '~/components/PageLoading';

const cx = classNames.bind(styles);

function Profile() {
    const location = useLocation();
    const [userVideo, setUserVideo] = useState([]);
    const [userId, setUserId] = useState('');
    const [userInfo, setUserInfo] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const pathname = location.pathname;
        const parts = pathname.split('/');
        const id = parts[parts.length - 1];
        setUserId(id);
    }, [location]);

    useEffect(() => {
        const fetchApi = async () => {
            setIsLoading(true); // Bắt đầu tải dữ liệu, đặt isLoading thành true
            const results = await User.userVideo(userId, 35);
            setUserVideo(results.videos);

            const userInfoData = await User.userInfo(userId);
            setUserInfo(userInfoData);

            setIsLoading(false); // Kết thúc tải dữ liệu, đặt isLoading thành false
        };
        fetchApi();
    }, [userId]);

    if (isLoading) {
        return <PageLoading className={cx('loading')} />; // Nếu isLoading là true, hiển thị phần loading
    }

    return (
        <div>
            {userInfo && (
                <div>
                    <UserInfoCom data={userInfo} />
                    <div className={cx('video-wrapper')}>
                        {userVideo &&
                            userVideo.map((video, index) => (
                                <VideoItem
                                    data={video}
                                    key={index}
                                    user={userInfo}
                                />
                            ))}
                    </div>
                </div>
            )}
        </div>
    );
}

export default Profile;
