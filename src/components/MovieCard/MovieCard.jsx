import {Image} from "minista";
import Badge from "@/components/Badge/index.js";
import RatingView from "@/components/RatingView/index.js";
import './MovieCard.scss'

const MovieCard = (props) => {
    const {
        title,
        imgSrc,
        duration,
        views,
        released,
        rating,
        season,
        href = '/catalog/movie/el-camino'
    } = props


    return (
        <a
            className="movie-card"
            href={href}
            title={title}
        >
            <h3 className="visually-hidden">
                {title}
            </h3>
            <Image className="movie-card__image" src={imgSrc} alt={title}/>
            <div className="movie-card__body">
                {duration && (
                    <Badge
                        iconName='clock'
                        iconAriaLabel='Duration'
                        hasFillIcon
                    >
                        {duration}
                    </Badge>
                )}

                {season && (
                    <Badge
                        iconName='catalog'
                        iconAriaLabel='Seasons'
                        hasFillIcon
                    >
                        {season}
                    </Badge>
                )}

                {rating && (
                    <Badge className="movie-card__rating-badge">
                        <RatingView {...rating} />
                    </Badge>
                )}

                {released && (
                    <Badge
                        className="movie-card__released-badge"
                    >
                        Released at&nbsp;
                        <time
                            className="movie-card__released-badge-label"
                            dateTime={released.dateTime}
                        >
                            {released.label}
                        </time>
                    </Badge>
                )}

                {views && (
                    <Badge
                        iconName='eye'
                        iconAriaLabel='Views'
                        hasFillIcon
                    >
                        {views}
                    </Badge>
                )}
            </div>
        </a>
    )
}

export default MovieCard