export function selectTab(path) {
    document.querySelector(`nav > a[href="${path}"]`).style.color = 'red'
}

export function unselectTab(path) {
    let tab = document.querySelector(`nav > a[href="${path}"]`)
    tab.style.removeProperty('color')
    if (tab.style.length == 0) tab.removeAttribute('style')
}
