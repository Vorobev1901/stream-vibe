import './MovieBanner.scss'
import MovieBannerCard from "@/components/MovieBannerCard/index.js";

const MovieBanner = () => {
    const titleId = 'movie-banner-title';

    return (
        <section
            className='movie-banner container'
            aria-labelledby={titleId}
        >
            <MovieBannerCard
                title={'El Camino'}
                TitleTag={'h1'}
                titleId={titleId}
                description={'El Camino is a sequel to Breaking Bad, in which Jesse Pinkman, after escaping captivity, desperately seeks freedom and a new life. The film concludes his story, showing his path to redemption and escape from the past.'}
                imgSrc={'https://res.cloudinary.com/dyjzjvudn/image/upload/w_1600,h_835,c_fill/v1759184794/el-camino_yn7zmu.webp'}
                isSmallPaddingY
            />
        </section>
    )
}

export default MovieBanner