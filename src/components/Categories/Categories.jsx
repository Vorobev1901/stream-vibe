import Section from "@/components/Section";
import CategoryCard from "@/components/CategoryCard";
import Slider from "@/components/Slider";
import SliderNavigation from "../Slider/components/SliderNavigation";
import './Categories.scss';

const Categories = () => {
    const titleId = 'categories-title';
    const categories = [
        {
            title: 'Action',
            images: [
                '/src/assets/images/categories/1.png',
                '/src/assets/images/categories/2.png',
                '/src/assets/images/categories/3.png',
                '/src/assets/images/categories/4.png'
            ],
        },
        {
            title: 'Adventure',
            images: [
                '/src/assets/images/categories/5.png',
                '/src/assets/images/categories/6.png',
                '/src/assets/images/categories/7.png',
                '/src/assets/images/categories/8.png'
            ],
        },
        {
            title: 'Comedy',
            images: [
                '/src/assets/images/categories/9.png',
                '/src/assets/images/categories/10.png',
                '/src/assets/images/categories/11.png',
                '/src/assets/images/categories/12.png'
            ],
        },
        {
            title: 'Drama',
            images: [
                '/src/assets/images/categories/13.png',
                '/src/assets/images/categories/14.png',
                '/src/assets/images/categories/15.png',
                '/src/assets/images/categories/16.png'
            ],
        },
        {
            title: 'Horror',
            images: [
                '/src/assets/images/categories/17.png',
                '/src/assets/images/categories/18.png',
                '/src/assets/images/categories/19.png',
                '/src/assets/images/categories/20.png'
            ],
        }
    ]
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
                    className="categories__actions"
                    id={sliderNavigationId}
                    hasPagination
                    mode={'tile'}
                />
            }
        >
            <Slider navigationTargetElementId={sliderNavigationId}>
                {categories.map((category, index) => (
                    <CategoryCard {...category} key={index}/>
                ))}
            </Slider>
        </Section>
    )
}

export default Categories;