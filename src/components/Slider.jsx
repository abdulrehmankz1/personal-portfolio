import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../styles.scss';

const NextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
        <div
            className={`${className} custom-arrow next-arrow`}
            style={{ ...style }}
            onClick={onClick}
        />
    );
};

const PrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
        <div
            className={`${className} custom-arrow prev-arrow`}
            style={{ ...style }}
            onClick={onClick}
        />
    );
};

const SimpleSlider = ({ images, isVisible, onClose }) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />
    };

    return isVisible ? (
        <div className="slider-wrapper">
            <button className="close-button" onClick={onClose}>✖</button>
            <div className="slider-container">
                <Slider {...settings}>
                    {images.map((image, index) => (
                        <div key={index}>
                            <img src={image} alt={`Slide ${index + 1}`} />
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    ) : null;
};

export default SimpleSlider;
