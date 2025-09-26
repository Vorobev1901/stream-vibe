import getAttrNameFromSelector from './getAttrNameFromSelector'

const getParams = (element, selectorAttr) => {
    return JSON.parse(element.getAttribute(getAttrNameFromSelector(selectorAttr)))
}

export default getParams;