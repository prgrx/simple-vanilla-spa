import {selectTab, mainTabs, mainSliderCircle, roundButtons} from "./src/router.mjs"

export function tab(path) {
    let tab = document.querySelector(`[data-link="${path}"]`)
    if (tab) selectTab(tab)
}
