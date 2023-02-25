export class ContactPage extends HTMLElement {

    static selector = 'app-contact'

    connectedCallback() {
        this.innerHTML = `<h1>Contact Us</h1><p>You can reach us at contact@example.com.</p>`
    }
    
}