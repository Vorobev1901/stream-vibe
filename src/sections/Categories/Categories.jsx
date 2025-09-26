import Section from "@/components/Section";
import CategoryCard from "@/components/CategoryCard";
import Slider from "@/components/Slider";
import SliderNavigation from "@/components/Slider/components/SliderNavigation";
import categoryItems from "./categoryItems.js";
import './Categories.scss';

const Categories = () => {
    const titleId = 'categories-title';
    const sliderNavigationId = 'categories-slider-navigation'

    return (
        <Section
            className={'categories'}
            titleId={titleId}
            title={'Explore our wide variety of categories'}
            description={'Whether you\'re looking for a comedy to make you laugh, a drama to make you think, or a documentary to learn something new'}
            isActionsHiddenOnMobile
            actions={
                <SliderNavigation
                    id={sliderNavigationId}
                    hasPagination
                    mode={'tile'}
                />
            }
        >
            <Slider
                navigationTargetElementId={sliderNavigationId}
                isBeyondTheViewportOnMobileS
                hasScrollbar
            >
                {categoryItems.map((category, index) => (
                    <CategoryCard {...category} key={index}/>
                ))}
            </Slider>
        </Section>
    )
}

export default Categories;