import TabsNavigation from "@/components/Tabs/components";
import classNames from "classnames";
import getTabsElementsIdsFromTitle from "@/components/Tabs/utils/getTabsElementsIdsFromTitle.js";
import './Tabs.scss'

const Tabs = (props) => {
    const {
        className,
        title,
        items = [],
        navigationTargetElementId = null,
        isEnableOnlyOnMobile = false,
    } = props

    return (
        <div
            className={classNames('tabs', className, {
                'tabs--enable-only-on-mobile': isEnableOnlyOnMobile,
            })}
            data-js-tabs={JSON.stringify({navigationTargetElementId})}
        >
            {!navigationTargetElementId && <TabsNavigation id={navigationTargetElementId} title={title} items={items}/>}
            <div className="tabs__body">
                {
                    items?.map((item, index) => {
                        const {
                            title,
                            isActive,
                            children,
                        } = item

                        const {buttonId, contentId} = getTabsElementsIdsFromTitle(title)

                        return (
                            <div
                                className={classNames('tabs__content', {
                                    'is-active': isActive
                                })}
                                id={contentId}
                                aria-labelledby={buttonId}
                                role="tabpanel"
                                tabIndex={0}
                                data-js-tabs-content=""
                                key={index}
                            >
                                {children}
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}
export default Tabs;