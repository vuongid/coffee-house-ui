import classNames from 'classnames/bind';

import styles from './Store.module.scss';
import Sidebar from '~/layouts/SidebarLayout/Sidebar/Sidebar';
import Button from '~/components/Button/Button';
import { facebookIcon, messageIcon, shareIcon } from '~/components/Icons';
import { useEffect, useState } from 'react';
import { getLocations } from '~/services/locationService';
import { getStoreBySlug } from '~/services/storeService';
import { useParams } from 'react-router-dom';
import config from '~/config';

const cx = classNames.bind(styles);

function Store() {
    const [locations, setLocations] = useState([]);
    const [stores, setStores] = useState([]);
    const { slug } = useParams();

    useEffect(() => {
        const fetchApi = async () => {
            const listLocation = await getLocations();
            const listStore = await getStoreBySlug(slug);
            console.log(listStore);
            setLocations(listLocation);
            setStores(listStore);
        };
        fetchApi();
    }, [slug]);

    const handleClick = (name) => {
        const url = `https://www.google.com/maps/place/The+Coffee+House+-+${encodeURIComponent(name)}`;
        window.open(url, '_blank');
    };

    return (
        <>
            <div className={cx('banner')}>
                <div className={cx('banner-img')}>
                    <img
                        src="https://file.hstatic.net/1000075078/file/untitled_design_64d7e90f1ee04cdaa5fa3ae45c4cf56b.png"
                        alt=""
                    />
                </div>
                <h2 className={cx('banner-text')}>Hệ thống cửa hàng The Coffee House toàn quốc</h2>
            </div>
            <div className={cx('content')}>
                <div className={cx('grid wide pd')}>
                    <div className={cx('row')}>
                        <div className={cx('col l-3 m-12 c-12')}>
                            <Sidebar menu={locations} url={'store'} />
                        </div>
                        <div className={cx('col l-9 m-12 c-12')}>
                            {stores ? (
                                stores.map((item, index) => (
                                    <div key={index}>
                                        <h3 className={cx('title')}>Tất cả cửa hàng {item.name}</h3>
                                        <div className={cx('row')}>
                                            {item.stores.map((store) => (
                                                <div key={store._id} className={cx('col l-6 m-12 c-12')}>
                                                    <div className={cx('store')}>
                                                        <div className={cx('store-img')}>
                                                            <img
                                                                src={config.IMAGES_URL.storeImage + store.image}
                                                                alt="store"
                                                            />
                                                        </div>
                                                        <div className={cx('store-info')}>
                                                            <h4 className={cx('name')}>{store.name}</h4>
                                                            <Button
                                                                full
                                                                backgroundSlide
                                                                onClick={() => handleClick(store.name)}
                                                                className={cx('btn')}
                                                            >
                                                                Xem bản đồ
                                                            </Button>
                                                            <div className={cx('actions')}>
                                                                <ul>
                                                                    <li>Chia sẻ trên:</li>
                                                                    <li>{facebookIcon}</li>
                                                                    <li>{messageIcon}</li>
                                                                    <li>{shareIcon}</li>
                                                                </ul>
                                                            </div>
                                                            <hr />
                                                            <p className={cx('address')}>{store.address}</p>
                                                            <p className={cx('time')}>{store.time}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                ))
                            ) : (
                                <div>Sắp ra mắt</div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Store;
