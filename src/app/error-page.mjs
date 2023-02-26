import { loadRouteFromLink } from '../router.mjs'

export class ErrorPage extends HTMLElement {

    static selector = 'app-error'

    connectedCallback() {
        document.querySelector('header').style.display = 'none'
		this.innerHTML = `
			<h1>Error</h1>
			<p>Nat fouuunnnd. Ya kno wat I'm sayin?</p>
			<a href="/about">Go back home</a>
		`
		let a = this.querySelector('a')
		a.addEventListener('click', () => { loadRouteFromLink(event, a.href) } )
    }

	disconnectedCallback() {
        document.querySelector('header').style.display = 'flex'
	}
    
}
