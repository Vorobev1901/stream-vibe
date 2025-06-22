import classNames from "classnames";
import Icon from "@/components/Icon";
import './Accordion.scss'

const Accordion = (props) => {
    const {
        className,
        title,
        id,
        name,
        isOpen,
        description,
        children,
    } = props;

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


                    {isOpen ? (
                        <Icon
                            name='minus'
                            className="accordion__icon"
                            hasFill
                        />
                    ) : (
                        <Icon
                            name='plus'
                            className="accordion__icon"
                            hasFill
                        />
                    )}
                </summary>
            </details>
            <div
                className="accordion__content"
                id={id}
                role={'default'}
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