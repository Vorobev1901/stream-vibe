import './MovieDetails.scss'
import SliderNavigation from "@/components/Slider/components/SliderNavigation";
import Slider from "@/components/Slider";
import PersonCard from "@/components/PersonCard";
import Button from "@/components/Button";
import ReviewCard from "@/components/ReviewCard";
import Icon from "@/components/Icon";
import Tags from "@/components/Tags";
import Ratings from "@/components/Ratings";

const MovieDetails = (props) => {
    const {
        seasons
    } = props;

    const titleId = 'movie-details-title'
    const castSliderNavigationId = 'movie-cast-slider-navigation'

    const castItems = [
        {
            imgSrc: 'https://res.cloudinary.com/dyjzjvudn/image/upload/w_102,h_109,c_fill/1_younwf.webp',
            imgAlt: 'Aaron Paul'
        },
        {
            imgSrc: 'https://res.cloudinary.com/dyjzjvudn/image/upload/w_102,h_109,c_fill/matt_r2godb.webp',
            imgAlt: 'Jonathan Banks'
        },
        {
            imgSrc: 'https://res.cloudinary.com/dyjzjvudn/image/upload/w_102,h_109,c_fill/jonathan_fe5lbc.webp',
            imgAlt: 'Matt Jones'
        },
        {
            imgSrc: 'https://res.cloudinary.com/dyjzjvudn/image/upload/w_102,h_109,c_fill/v1759181239/4_i0q5ob.jpg',
            imgAlt: 'Todd Terry'
        },
        {
            imgSrc: 'https://res.cloudinary.com/dyjzjvudn/image/upload/w_102,h_109,c_fill/v1759182127/jessi_kwh4g6.jpg',
            imgAlt: 'Julie Pearl'
        },
        {
            imgSrc: 'https://res.cloudinary.com/dyjzjvudn/image/upload/w_102,h_109,c_fill/v1759182126/scott_v6eg7e.webp',
            imgAlt: 'Larry Hankin'
        },
        {
            imgSrc: 'https://res.cloudinary.com/dyjzjvudn/image/upload/w_102,h_109,c_fill/v1759182344/cristen_uhfwjy.jpg',
            imgAlt: 'Scott Shepherd'
        },
        {
            imgSrc: 'https://res.cloudinary.com/dyjzjvudn/image/upload/w_102,h_109,c_fill/v1759182344/robert_djrvxd.jpg',
            imgAlt: 'Julie Pearl'
        },
        {
            imgSrc: 'https://res.cloudinary.com/dyjzjvudn/image/upload/w_102,h_109,c_fill/1_younwf.webp',
            imgAlt: 'Aaron Paul'
        },
        {
            imgSrc: 'https://res.cloudinary.com/dyjzjvudn/image/upload/w_102,h_109,c_fill/matt_r2godb.webp',
            imgAlt: 'Jonathan Banks'
        },
    ]

    const reviewItems = [
        {
            name: 'Aniket Roy',
            subtitle: 'From United States',
            ratingValue: 4.5,
            description: 'This movie was recommended to me by a very dear friend who went for the movie by herself. I went to the cinemas to watch but had a houseful board so couldn’t watch it.'
        },
        {
            name: 'Swaraj',
            subtitle: 'From United States',
            ratingValue: 5,
            description: 'A restless king promises his lands to the local tribals in exchange of a stone (Panjurli, a deity of Keradi Village) wherein he finds solace and peace of mind.'
        },
        {
            name: 'Aniket Roy',
            subtitle: 'From United States',
            ratingValue: 4.5,
            description: 'This movie was recommended to me by a very dear friend who went for the movie by herself. I went to the cinemas to watch but had a houseful board so couldn’t watch it.'
        },
        {
            name: 'Swaraj',
            subtitle: 'From United States',
            ratingValue: 5,
            description: 'A restless king promises his lands to the local tribals in exchange of a stone (Panjurli, a deity of Keradi Village) wherein he finds solace and peace of mind.'
        },
        {
            name: 'Aniket Roy',
            subtitle: 'From United States',
            ratingValue: 4.5,
            description: 'This movie was recommended to me by a very dear friend who went for the movie by herself. I went to the cinemas to watch but had a houseful board so couldn’t watch it.'
        },
        {
            name: 'Swaraj',
            subtitle: 'From United States',
            ratingValue: 5,
            description: 'A restless king promises his lands to the local tribals in exchange of a stone (Panjurli, a deity of Keradi Village) wherein he finds solace and peace of mind.'
        },
        {
            name: 'Aniket Roy',
            subtitle: 'From United States',
            ratingValue: 4.5,
            description: 'This movie was recommended to me by a very dear friend who went for the movie by herself. I went to the cinemas to watch but had a houseful board so couldn’t watch it.'
        },
        {
            name: 'Swaraj',
            subtitle: 'From United States',
            ratingValue: 5,
            description: 'A restless king promises his lands to the local tribals in exchange of a stone (Panjurli, a deity of Keradi Village) wherein he finds solace and peace of mind.'
        },
    ]

    return (
        <section
            className="movie-details container"
            id={titleId}
        >
            <h2
                className='visually-hidden'
                id={titleId}
            >
                Detailed movie information
            </h2>

            <div className="movie-details__main">
                {seasons && (
                    <div className="movie-details__panel movie-details__panel--seasons">
                        <div className="movie-details__group movie-details__group--big-gap-y">
                            <h3 className="h4">
                                Seasons and Episodes
                            </h3>
                            {seasons}
                        </div>
                    </div>
                )}
                <div className="movie-details__panel movie-details__panel--description">
                    <div className="movie-details__group">
                        <h3 className="movie-details__title">
                            Description
                        </h3>
                        <div className="movie-details__description">
                            <p>
                                El Camino reveals Jesse Pinkman’s emotional struggle after Breaking Bad, portraying his
                                trauma, pursuit of peace, redemption, and liberation from darkness.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="movie-details__panel">
                    <header className="movie-details__panel-header">
                        <h3 className="movie-details__title">
                            Cast
                        </h3>
                        <SliderNavigation
                            className="movie-details__panel-navigation"
                            id={castSliderNavigationId}
                            hasPagination={false}
                            mode={'rounded'}
                            isHiddenMobile={false}
                            buttonMode={'black-08'}
                        />
                    </header>
                    <Slider
                        navigationTargetElementId={castSliderNavigationId}
                        hasScrollbarOnMobile={false}
                        params={{
                            slidesPerView: 'auto',
                            spaceBetween: 10,
                            breakpoints: {
                                1024: {
                                    slidesPerView: 'auto',
                                    spaceBetween: 20,
                                    simulateTouch: false,
                                },
                            }
                        }}
                    >
                        {castItems.map((castItem, index) => (
                            <PersonCard
                                {...castItem}
                                key={index}
                            />
                        ))}
                    </Slider>
                </div>
                <div className="movie-details__panel movie-details__panel--large-gap-y">
                    <header className="movie-details__panel-header">
                        <h3 className="movie-details__title">
                            Reviews
                        </h3>
                        <Button
                            iconName="plus"
                            label="Add Your Review"
                            mode={'black-08'}
                            hasFillIcon
                        />
                    </header>
                    <Slider
                        navigationMode={'rounded'}
                        isNavigationHiddenMobile={false}
                        hasScrollbarOnMobile={false}
                        params={{
                            slidesPerView: 1,
                            slidesPerGroup: 1,
                            spaceBetween: 16,
                            breakpoints: {
                                1024: {
                                    slidesPerView: 2,
                                    slidesPerGroup: 2,
                                    spaceBetween: 20,
                                    simulateTouch: false,
                                }
                            }
                        }}
                    >
                        {reviewItems.map((reviewItem, index) => (
                            <ReviewCard
                                {...reviewItem}
                                key={index}
                            />
                        ))}
                    </Slider>
                </div>
            </div>
            <aside className="movie-details__info">
                <div className="movie-details__panel">
                    <div className="movie-details__groups">
                        <div className="movie-details__group">
                            <h3 className="movie-details__title">
                                <Icon
                                    name={'calendar'}
                                />
                                <span>
                                    Released Year
                                </span>
                            </h3>
                            <div className="movie-details__description">
                                <time className="h6" dateTime="2022">
                                    2022
                                </time>
                            </div>
                        </div>
                        <div className="movie-details__group">
                            <h3 className="movie-details__title">
                                <Icon
                                    name={'translate'}
                                />
                                <span>
                                   Available Languages
                                </span>
                            </h3>
                            <Tags
                                items={
                                    [
                                        'English',
                                        'Hindi',
                                        'Tamil',
                                        'Telegu',
                                        'Kannada'
                                    ]
                                }
                            />
                        </div>
                        <div className="movie-details__group">
                            <h3 className="movie-details__title">
                                <Icon
                                    name={'star'}
                                />
                                <span>
                                    Ratings
                                </span>
                            </h3>
                            <Ratings
                                items={[
                                    {
                                        title: 'IMDb',
                                        ratingValue: 4.5
                                    },
                                    {
                                        title: 'IMDb',
                                        ratingValue: 4
                                    }
                                ]}
                            />
                        </div>
                        <div className="movie-details__group">
                            <h3 className="movie-details__title">
                                <Icon
                                    name={'genres'}
                                />
                                <span>
                                    Gernes
                                </span>
                            </h3>
                            <Tags
                                items={[
                                    'Action',
                                    'Adventure'
                                ]}
                            />
                        </div>
                        <div className="movie-details__group">
                            <h3 className="movie-details__title">
                                Director
                            </h3>
                            <PersonCard
                                imgSrc={'https://res.cloudinary.com/dyjzjvudn/image/upload/w_57,h_60,c_fill/matt_r2godb.webp'}
                                imgAlt={'Rishab Shetty'}
                                name={'Rishab Shetty'}
                                subtitle={'From USA'}
                            />
                        </div>
                        <div className="movie-details__group">
                            <h3 className="movie-details__title">
                                Music
                            </h3>
                            <PersonCard
                                imgSrc={'https://res.cloudinary.com/dyjzjvudn/image/upload/w_57,h_60,c_fill/v1759182344/robert_djrvxd.jpg'}
                                imgAlt={'B. Ajaneesh Loknath'}
                                name={'B. Ajaneesh Loknath'}
                                subtitle={'From USA'}
                            />
                        </div>
                    </div>
                </div>
            </aside>
        </section>
    )
}

export default MovieDetails