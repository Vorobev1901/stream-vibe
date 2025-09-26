import classNames from "classnames"
import './Accordion.scss'

const Accordion = (props) => {
    const {
        className,
        title,
        id,
        name,
        isOpen,
        children,
    } = props;

    const iconTitle = 'Open accordion';

    return (
        <div className={classNames("accordion", className)}>
            <details
                className='accordion__details'
                name={name}
                open={isOpen}
            >
                <summary className='accordion__summary'>
                    <h3 className="accordion__title h5">
                       <span role="term" aria-details={id}>
                           {title}
                       </span>
                    </h3>
                    <span
                        className='accordion__summary-icon'
                        aria-label={iconTitle}
                        title={iconTitle}>
                    </span>
                </summary>
            </details>
            <div
                className="accordion__content"
                id={id}
                role={'definition'}
            >
                <div className="accordion__content-inner">
                    <div className="accordion__body">
                        {children}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Accordion;