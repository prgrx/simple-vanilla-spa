export class ErrorPage extends HTMLElement {

    static selector = 'app-error'

    connectedCallback() {
        this.innerHTML = `<h1>Error</h1><p>Nat fouuunnnd. Ya kno wat I'm sayin?</p>`
    }
    
}