import classNames from "classnames"
import './Accordion.scss'
import Icon from "@/components/Icon";

const Accordion = (props) => {
    const {
        className,
        title,
        titleLevelClassName = 'h5',
        subtitle,
        id,
        name,
        isOpen,
        children,
        isArrowButton = false,
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
                    <h3 className={classNames('accordion__title', titleLevelClassName)}>
                       <span role="term" aria-details={id}>
                           {title}
                       </span>
                        {subtitle && <span className={'accordion__subtitle'}>{subtitle}</span>}
                    </h3>
                    {isArrowButton ? (
                        <div className='accordion__arrow'>
                            <Icon
                                name='arrow-down'
                            />
                        </div>
                    ) : (
                        <span
                            className='accordion__summary-icon'
                            aria-label={iconTitle}
                            title={iconTitle}
                        />
                    )}
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