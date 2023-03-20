import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import classNames from 'classnames/bind';

import styles from './Carousel.module.scss';
import { useRef, useState } from 'react';

const cx = classNames.bind(styles);

function Carousel({ images, border, swipe = true }) {
    const [currentSlider, setCurrentSlider] = useState(0);
    const sliderRef = useRef(null);

    const CustomPrevArrow = ({ className, style, onClick }) => (
        <div className={cx(className, 'custom-prev')} style={{ ...style }} onClick={onClick} />
    );

    const CustomNextArrow = ({ className, style, onClick }) => (
        <div className={cx(className, 'custom-next')} style={{ ...style }} onClick={onClick} />
    );

    const settings = {
        dots: true,
        infinite: true,
        autoplay: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        dotsClass: cx('slick-dots', 'slick-thumb', 'dots'),
        arrows: true,
        prevArrow: <CustomPrevArrow />,
        nextArrow: <CustomNextArrow />,
        swipe: swipe,
        appendDots: (dots) => (
            <div>
                <ul>
                    {dots.map((dot, index) => (
                        <li key={index} className={cx('dots')} onClick={() => sliderRef.current.slickGoTo(index)}>
                            <div className={cx('dot', { active: currentSlider === index })}></div>
                        </li>
                    ))}
                </ul>
            </div>
        ),
        beforeChange: (prev, next) => setCurrentSlider(next),
    };

    return (
        <Slider {...settings} className={cx('wrapper', { border: border })} ref={sliderRef}>
            {images.map((item, index) => (
                <div key={index}>
                    <img className={cx('img')} src={item.img} alt="" />
                </div>
            ))}
        </Slider>
    );
}

export default Carousel;
