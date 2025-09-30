import Button from "@/components/Button";
import classNames from "classnames";
import './SliderNavigation.scss'

const SliderNavigation = (props) => {
    const {
        className,
        id,
        hasPagination = true,
        /**
         * '' (default) | 'tile' | 'rounded'
         */
        mode = '',
        /**
         * '' (default) | 'abs-bottom'
         */
        position = '',
        isHiddenMobile,
        buttonMode = 'black-10'
    } = props;

    return (
        <div
            className={classNames(className, 'slider-navigation', {
                [`slider-navigation--${mode}`]: mode,
                [`slider-navigation--${position}`]: position,
                'hidden-mobile': isHiddenMobile
            })}
            id={id}
            data-js-slider-navigation=''
        >
            <Button
                className="slider-navigation__arrow-button slider-navigation__arrow-button--previous"
                label="Previous slide"
                mode={buttonMode}
                isLabelVisible={false}
                iconName="arrow-left"
                extraAttrs={{
                    'data-js-slider-navigation-previous-button': ''
                }}
            />
            {hasPagination &&
                <div
                    className="slider-navigation__pagination"
                    data-js-slider-pagination=''
                />
            }
            <Button
                className="slider-navigation__arrow-button slider-navigation__arrow-button--next"
                label="Next slide"
                mode={buttonMode}
                isLabelVisible={false}
                iconName="arrow-right"
                extraAttrs={{
                    'data-js-slider-navigation-next-button': ''
                }}
            />
        </div>
    )

}

export default SliderNavigation;