import Tabs from "@/components/Tabs";
import getIdFromTitle from "@/components/Tabs/utils/getIdFromTitle.js";
import Section from "@/components/Section";
import SliderNavigation from "@/components/Slider/components/SliderNavigation";
import Slider from "@/components/Slider";
import CategoryCard from "@/components/CategoryCard";
import collectionGroups from "./collectionGroups.js";
import MovieCard from "@/components/MovieCard";
import './Collection.scss'

const Collection = () => {
    const tabsTitle = "Collections";

    return (
        <Tabs
            className="collections container"
            title={tabsTitle}
            isEnableOnlyOnMobile
            items={collectionGroups.map((collectionGroup) => ({
                    isActive: collectionGroup.isActive,
                    title: collectionGroup.title,
                    children: (
                        <div className="collections__group">
                            <p className="collections__title hidden-mobile">
                                {collectionGroup.title}
                            </p>
                            {collectionGroup.items.map((collectionItem, index) => {
                                const {
                                    title,
                                    categoryItems,
                                    movieItems,
                                    sliderParams
                                } = collectionItem


                                const titleFormatted = `${getIdFromTitle(collectionGroup.title)}-${getIdFromTitle(title)}`;
                                const titleId = `${titleFormatted}-title`
                                const sliderNavigationId = `${titleFormatted}-slider-navigation`

                                return (
                                    <Section
                                        className={'collections__section'}
                                        titleId={titleId}
                                        title={title}
                                        isActionsHiddenOnMobile
                                        actions={
                                            <SliderNavigation
                                                id={sliderNavigationId}
                                                hasPagination
                                                mode={'tile'}
                                            />
                                        }
                                        key={index}
                                    >
                                        <Slider
                                            navigationTargetElementId={sliderNavigationId}
                                            isBeyondTheViewportOnMobileS
                                            params={sliderParams}
                                            hasScrollbar
                                        >
                                            {categoryItems?.map((categoryItem, index) => (
                                                <CategoryCard {...categoryItem} key={index}/>
                                            )) ?? movieItems?.map((movieItem, index) => (
                                                <MovieCard {...movieItem} key={index}/>
                                            ))}
                                        </Slider>
                                    </Section>
                                )
                            })}
                        </div>
                    )
                }
            ))}
        />
    )
}

export default Collection;