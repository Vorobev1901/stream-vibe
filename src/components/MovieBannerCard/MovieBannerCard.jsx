import {Image} from "minista";
import Button from "@/components/Button/index.js";
import './MovieBannerCard.scss'

const MovieBannerCard = props => {
    const {
        title,
        description,
        imgSrc
    } = props

    return (
        <div className="movie-banner-card">
            <Image
                className="movie-banner-card__image"
                src={imgSrc}
                alt={''}
            />
            <div className="movie-banner-card__inner">
                <h2 className="movie-banner-card__title h3">
                    {title}
                </h2>
                <div className="movie-banner-card__description hidden-mobile">
                    <p>
                        {description}
                    </p>
                </div>
                <footer className="movie-banner-card__footer">
                    <Button
                        className="movie-banner-card__play-button"
                        iconName='play'
                        label='Play Now'
                        hasFillIcon={true}
                    />
                    <div className="movie-banner-card__actions">
                        <Button
                            iconName='plus'
                            label='Add to playlist'
                            isLabelVisible={false}
                            hasFillIcon={true}
                            mode={'black-06'}
                        />
                        <Button
                            iconName='like'
                            label='Like'
                            isLabelVisible={false}
                            mode={'black-06'}
                        />
                        <Button
                            iconName='volume'
                            label='Mute'
                            isLabelVisible={false}
                            mode={'black-06'}
                        />
                    </div>
                </footer>
            </div>
        </div>
    )
}

export default MovieBannerCard