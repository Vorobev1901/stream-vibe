import Swiper from 'swiper'
import {Navigation, Pagination, Scrollbar} from 'swiper/modules';
import getParams from "@/utils/getParams";

const rootElement = '[data-js-slider]'

class Slider {
    selectors = {
        root: rootElement,
        swiper: '[data-js-slider-swiper]',
        navigation: '[data-js-slider-navigation]',
        pagination: '[data-js-slider-pagination]',
        previousButton: '[data-js-slider-navigation-previous-button]',
        nextButton: '[data-js-slider-navigation-next-button]',
        scrollbar: '[data-js-slider-scrollbar]',
    }

    constructor(rootElement) {
        this.rootElement = rootElement;
        this.swiperElement = this.rootElement.querySelector(this.selectors.swiper);
         // Подставляем параметры и id из data атрибутов rootElement;
        this.params = getParams(this.rootElement, this.selectors.root);

        // Находим блок с навигацией либо в rootElement, либо по id;
        this.navigationElement =
            !this.params.navigationTargetElementId ?
                this.rootElement.querySelector(this.selectors.navigation) :
                document.getElementById(this.params.navigationTargetElementId);

        this.paginationElement = this.navigationElement.querySelector(this.selectors.pagination);
        this.previousButtonElement = this.navigationElement.querySelector(this.selectors.previousButton);
        this.nextButtonElement = this.navigationElement.querySelector(this.selectors.nextButton);
        this.scrollbarElement = this.rootElement.querySelector(this.selectors.scrollbar);

        this.init()
    }

    init() {
        new Swiper(this.swiperElement, {
            ...this.params.sliderParams,
            modules: [Navigation, Pagination, Scrollbar],
            pagination: {
                el: this.paginationElement,
                bulletClass: 'slider-navigation__pagination-bullet',
                bulletActiveClass: 'is-active',
            },
            navigation: {
                nextEl: this.nextButtonElement,
                prevEl: this.previousButtonElement,
            },
            scrollbar: {
                el: this.scrollbarElement,
                dragClass: 'slider__scrollbar-drag',
            }
        })
    }
}

class SliderCollection {
    constructor() {
        this.init()
    }

    init() {
        document.querySelectorAll(rootElement).forEach(element => {
            new Slider(element);
        })
    }
}

export default SliderCollection;