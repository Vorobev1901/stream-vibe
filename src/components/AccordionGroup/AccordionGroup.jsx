import './AccordionGroup.scss'
import classNames from "classnames";

const AccordionGroup = (props) => {
    const {
        className,
        columns = 1,
        children,
        isOrderList = true
    } = props

    const ListTag = isOrderList ? 'ol' : 'ul';

    return (
        <ListTag
            className={classNames('accordion-group', className, {
                [`accordion-group--${columns}-columns`]: columns > 1,
                'accordion-group--has-counter': isOrderList
            })}
        >
            {children.map((child, childIndex) => (
                <li
                    className={classNames('accordion-group__item', {
                    })}
                    key={childIndex}>
                    {child}
                </li>
            ))}

        </ListTag>
    )
}

export default AccordionGroup