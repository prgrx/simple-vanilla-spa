import {selectTab, unselectTab} from "../../utils.mjs"

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
        unselectTab('/contact')
    }
    
}
