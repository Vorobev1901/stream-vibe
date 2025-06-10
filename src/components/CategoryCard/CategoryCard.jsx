import {Image} from "minista"
import Icon from "@/components/Icon";

import './CategoryCard.scss'

const CategoryCard = (props) => {
    const {
        title,
        images = []
    } = props;

    return (
        <a className='category-card' href={'/movies'}>
            <div className='category-card__images'>
                {images.map((imageSrc, index) => (
                    <Image className='category-card__image' src={imageSrc} key={index}/>
                ))}
            </div>
            <div className='category-card__body'>
                <h3 className="category-card__title">
                    {title}
                </h3>
                <Icon
                    className='category-card__icon'
                    name={'arrow-right'}
                />
            </div>
        </a>
    )
}

export default CategoryCard;