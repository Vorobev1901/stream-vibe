import './SliderNavigation.scss'
import Button from "@/components/Button";
import classNames from "classnames";

const SliderNavigation = (props) => {
    const {
        className,
        id,
        hasPagination = true,
        /**
         *
         * '' (default) | 'tile'
         *
         */
        mode = ''
    } = props;

    return (
        <div
            className={classNames(className, 'slider-navigation', {
                [`slider-navigation--${mode}`]: mode
            })}
            id={id}
            data-js-slider-navigation=''
        >
            <Button
                className="slider-navigation__arrow-button slider-navigation__arrow-button--previous"
                label="Previous slide"
                mode='black-10'
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
                mode='black-10'
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