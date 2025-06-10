import classNames from "classnames";
import './Section.scss'

const Section = (props) => {
    const {
        titleId,
        title,
        description,
        className,
        children,
        actions,
        isActionsHiddenOnMobile = false,
    } = props

    return (
        <section className={classNames(className, "section container")} aria-labelledby={titleId}>
            <header className="section__header">
                <div className="section__info">
                    <h2 className="section__title h3">
                        {title}
                    </h2>
                    {description &&
                        <div className="section__description">
                            <p>
                                {description}
                            </p>
                        </div>
                    }
                </div>
                {actions &&
                    <div className={classNames("section__actions", {
                        'hidden-mobile': isActionsHiddenOnMobile
                    })}>
                        {actions}
                    </div>
                }

            </header>
            <div className="section__body">
                {children}
            </div>
        </section>
    )
}

export default Section;