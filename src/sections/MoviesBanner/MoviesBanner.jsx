import Slider from "@/components/Slider"
import movieItems from "./movieItems.js";
import MovieBannerCard from "@/components/MovieBannerCard/index.js";
import './MoviesBanner.scss'

const MoviesBanner = () => {
    const titleId = 'movieItems-banner-title'

    return (
        <section className="movie-banner container" aria-labelledby={titleId}>
            <h1 className="visually-hidden" id={titleId}>
                Movies & Shows
            </h1>

            <Slider
                navigationPosition="abs-bottom"
                hasScrollbarOnMobile={false}
                params={
                    {
                        slidesPerView: 1,
                        spaceBetween: 16,
                        breakpoints: {
                            1024: {
                                allowTouchMove: false,
                            }
                        }
                    }
                }
            >
                {movieItems.map((movie, index) => {
                    return (
                        <MovieBannerCard
                            {...movie}
                            key={index}
                        />
                    )
                })}
            </Slider>
        </section>
    )
}

export default MoviesBanner
