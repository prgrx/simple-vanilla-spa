export class AboutPage extends HTMLElement {

	static selector = 'app-about'

	connectedCallback() {
		this.innerHTML = `<h1>About Us</h1><p>We are a team of developers.</p>`
	}		

    
        
}
