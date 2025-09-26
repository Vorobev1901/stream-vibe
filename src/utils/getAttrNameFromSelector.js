const getAttrNameFromSelector = (selectorAttr) => {
    return selectorAttr.substring(
        1,
        selectorAttr.length - 1
    )
}

export default getAttrNameFromSelector