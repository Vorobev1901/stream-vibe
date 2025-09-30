import Button from "@/components/Button/index.js";
import classNames from "classnames";
import './MovieBannerCard.scss'

const MovieBannerCard = props => {
    const {
        title,
        description,
        imgSrc,
        TitleTag = 'h2',
        titleId,
        isSmallPaddingY = false,
    } = props

    return (
        <div className="movie-banner-card">
            <img
                className="movie-banner-card__image"
                src={imgSrc}
                width="1594"
                height="835"
                alt={`Poster for ${title}`}
            />
            <div className={classNames("movie-banner-card__inner", {
                'movie-banner-card__inner--small-padding-y': isSmallPaddingY,
            })}>
                <TitleTag
                    className="movie-banner-card__title h3"
                    id={titleId}
                >
                    {title}
                </TitleTag>
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