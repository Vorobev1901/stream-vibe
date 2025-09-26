import 'swiper/css';
import './Slider.scss'
import SliderNavigation from "./components/SliderNavigation";
import classNames from "classnames";

const defaultSliderParams = {
    slidesPerView: 5,
    spaceBetween: 30,
    slidesPerGroup: 5,
    breakpoints: {
        0: {
            slidesPerView: 2,
            spaceBetween: 16,
            slidesPerGroup: 1,
            allowTouchMove: true,
        },
        481: {
            slidesPerView: 3,
            spaceBetween: 16,
            slidesPerGroup: 3,
        },
        768: {
            slidesPerView: 3,
            spaceBetween: 20,
            slidesPerGroup: 3,
        },
        1024: {
            slidesPerView: 4,
            spaceBetween: 20,
            slidesPerGroup: 4,
            simulateTouch: false,
        },
        1441: {
            slidesPerView: 5,
            slidesPerGroup: 5,
            spaceBetween: 30,
            simulateTouch: false,
        }
    }
}

const Slider = (props) => {
    const {
        children,
        navigationTargetElementId = null,
        params = defaultSliderParams,
        isBeyondTheViewportOnMobileS = false,
        hasScrollbarOnMobile = true,
        /**
         * '' (default) | 'abs-bottom'
         */
        navigationPosition = '',
        isNavigationHiddenMobile = true,
    } = props;

    return (
        <div
            className={classNames('slider', {
                    'slider--beyond-the-viewport-on-mobile-s': isBeyondTheViewportOnMobileS
                }
            )}
            data-js-slider={JSON.stringify({
                    sliderParams: params,
                    navigationTargetElementId
                }
            )}
        >
            <div
                className="slider__swiper swiper"
                data-js-slider-swiper=''
            >
                <ul className="slider__list swiper-wrapper">
                    {children.map((slide, index) => (
                        <li className="slider__item swiper-slide" key={index}>
                            {slide}
                        </li>
                    ))}
                </ul>
            </div>
            {!navigationTargetElementId && (
                <SliderNavigation
                    className={'slider__navigation'}
                    position={navigationPosition}
                    isHiddenMobile={isNavigationHiddenMobile}
                />)}

            { hasScrollbarOnMobile && (
                <div
                    className="slider__scrollbar visible-mobile"
                    data-js-slider-scrollbar=""
                />
            )}
        </div>
    )
}

export default Slider;