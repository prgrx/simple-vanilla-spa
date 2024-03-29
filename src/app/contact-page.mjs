//import {tab} from "../../utils.mjs"

import {selectTab} from "../router.mjs"

export class ContactPage extends HTMLElement {

    static selector = 'app-contact'

    connectedCallback() {
        this.innerHTML = `
	    	<h1>Contact us</h1>
		    <p>You can reach us at contact@example.com.</p>
	    `
        selectTab('/contact')          
    }

    disconnectedCallback() {
        //tab('/contact')
    }
    
}
