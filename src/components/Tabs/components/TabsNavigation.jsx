import getIdFromTitle from "../utils/getIdFromTitle.js";
import './TabsNavigation.scss'
import getTabsElementsIdsFromTitle from "@/components/Tabs/utils/getTabsElementsIdsFromTitle.js";
import classNames from "classnames";

export const TabsNavigation = (props) => {
    const {
        id,
        title,
        items
    } = props;

    const titleFormatted = getIdFromTitle(title);
    const titleId = `${titleFormatted}-title`;

    return (
        <div
            id={id}
            className="tabs-navigation"
            role="tablist"
            aria-labelledby={titleId}
            data-js-tabs-navigation=""
        >
            <h3
                className="visually-hidden"
                id={titleId}
            >
                {title}
            </h3>
            {
                items.map((item, index) => {
                    const {title, isActive} = item;

                    const { buttonId, contentId} = getTabsElementsIdsFromTitle(title)

                    return (
                        <button
                            className={classNames("tabs-navigation__button", {
                                'is-active': isActive
                            })}
                            id={buttonId}
                            aria-controls={contentId}
                            aria-selected={isActive}
                            type="button"
                            role="tab"
                            tabIndex={isActive ? 0 : -1}
                            data-js-tabs-button=''
                            key={index}
                        >
                            {title}
                        </button>
                    )
                })
            }
        </div>
    )
}

export default TabsNavigation