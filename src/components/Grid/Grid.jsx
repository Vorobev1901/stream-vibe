import './Grid.scss'
import classNames from "classnames";

const Grid = (props) => {
    const {
        columns,
        children,
    } = props

    return (
        <ul className={classNames('grid', {
            [`grid--${columns}`]: columns
        })}>
            {
                children.map((child, index) => (
                    <li className='grid__item' key={index}>
                        {child}
                    </li>
                ))
            }
        </ul>
    )
}

export default Grid;