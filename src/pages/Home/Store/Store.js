import Slider from 'react-slick';
import classNames from 'classnames/bind';

import styles from './Store.module.scss';
import Button from '~/components/Button';
import { arrowIcon } from '~/components/Icons';
import { useRef } from 'react';
import Carousel from '~/components/Carousel';
import images from '~/assets/images';

const cx = classNames.bind(styles);

const stores = [
    {
        title: `SIGNATURE1 <br />By The Coffee House`,
        description: 'Nơi cuộc hẹn tròn đầy với Cà phê đặc sản, Món ăn đa bản sắc và Không gian cảm hứng.',
        images: [
            { img: images.storeSIG1 },
            { img: images.storeSIG2 },
            { img: images.storeSIG3 },
            { img: images.storeSIG4 },
        ],
    },
    {
        title: 'The Coffe House<br />Grand View',
        description:
            'Nhà mới Quận 7 toạ lạc tại khu đô thị The Grand View, với những khu phố hiện đại, sầm uất và nhộn nhiệp.',
        images: [
            { img: images.storeGV1 },
            { img: images.storeGV2 },
            { img: images.storeGV3 },
            { img: images.storeGV4 },
            { img: images.storeGV5 },
        ],
    },
    {
        title: 'The Coffe House<br />Grace Tower',
        description:
            'Nhà mới Quận 7 toạ lạc tại The Grace Tower, thuộc khu phố nhộn nhiệp, sầm uất. Cửa hàng nổi bật với không gian nhỏ nhắn nhưng lại có nhiều nguồn sáng tự nhiên, mang đến sự hứng khởi, năng động',
        images: [
            { img: images.storeKH1 },
            { img: images.storeKH2 },
            { img: images.storeKH3 },
            { img: images.storeKH4 },
        ],
    },
];

function Store() {
    const sliderRef = useRef(null);

    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
    };

    const handlePrev = () => {
        console.log(1);
        sliderRef.current.slickPrev();
    };
    const handleNext = () => sliderRef.current.slickNext();

    return (
        <Slider ref={sliderRef} {...settings} className="wrapper">
            {stores.map((store, index) => (
                <div key={index} className="grid">
                    <div className={cx('row')}>
                        <div className={cx('col l-5 m-5 c-12')}>
                            <div className={cx('info')}>
                                <h3 className={cx('title')} dangerouslySetInnerHTML={{ __html: store.title }}></h3>
                                <p className={cx('description')}>{store.description}</p>
                                <Button primary>Tìm hiểu thêm</Button>
                                <div className={cx('arrow')}>
                                    <div className={cx('prev-icon')} onClick={handlePrev}>
                                        {arrowIcon}
                                    </div>
                                    <div className={cx('next-icon')} onClick={handleNext}>
                                        {arrowIcon}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={cx('col l-7 m-7 c-12')}>
                            <div className={cx('carousel')}>
                                <Carousel images={store.images} border swipe={false} />
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </Slider>
    );
}

export default Store;
