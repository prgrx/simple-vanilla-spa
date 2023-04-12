//import {tab} from "../../utils.mjs"

import {selectTab} from "../router.mjs"

export class HomePage extends HTMLElement {

    static selector = 'app-home'

    connectedCallback() {
        this.innerHTML = `<h1>Welcome to the Home page!</h1>`
        selectTab('/')
    }
    
    disconnectedCallback() {
        //tab('/')
    }
}
