//import {tab} from "../../utils.mjs"

import {selectTab} from "../router.mjs"

export class AboutPage extends HTMLElement {

	static selector = 'app-about'

	connectedCallback() {
		this.innerHTML = Array(100).fill('<p>We are a team of developers.</p>').join('')
        selectTab('/about')
	}		

    disconnectedCallback() {
        //tab('/about')
    }   
        
}
