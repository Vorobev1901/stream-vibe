import getIdFromTitle from "@/components/Tabs/utils/getIdFromTitle.js";

const getTabsElementsIdsFromTitle = (title) => {
    const titleFormatted = getIdFromTitle(title)

    return {
        buttonId: `${titleFormatted}-tab`,
        contentId: `${titleFormatted}-tabpanel`,
    }
}

export default getTabsElementsIdsFromTitle