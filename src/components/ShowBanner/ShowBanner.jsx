import './ShowBanner.scss'
import MovieBannerCard from "@/components/MovieBannerCard/index.js";

const ShowBanner = () => {
    const titleId = 'show-banner-title'

    return (
        <div className="show-banner container" aria-labelledby={titleId}>
            <MovieBannerCard
                title={'Breaking Bad'}
                TitleTag={'h1'}
                titleId={titleId}
                description={'Breaking Bad follows Walter White, a chemistry teacher who, knowing about a fatal disease at school, begins cooking meth to provide for his family. As a result, he transforms from a quiet teacher into a ruthless crime boss.'}
                imgSrc={'https://res.cloudinary.com/dyjzjvudn/image/upload/w_1600,h_835,c_fill/v1758907145/2_fqgffu.webp'}
                isSmallPaddingY
            />
        </div>
    )

}
export default ShowBanner