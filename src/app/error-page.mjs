import { loadRouteFromLink } from '../router.mjs'

export class ErrorPage extends HTMLElement {

    static selector = 'app-error'

    connectedCallback() {
        document.querySelector('header').style.display = 'none'
		this.innerHTML = `
			<h1>Error</h1>
			<p>Nat fouuunnnd. Ya kno wat I'm sayin?</p>
			<a href="/home">Go back home</a>

	<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg" width="100px" height="100px">
	  <circle cx="60" cy="10" r="10">
		<animate
		  attributeName="cx"
		  dur="4s"
		  calcMode="spline"
		  repeatCount="indefinite"
		  values="60; 110; 60; 10; 60"
		  keyTimes="0; 0.25; 0.5; 0.75; 1"
		  keySplines="0.5 0 0.5 1; 0.5 0 0.5 1; 0.5 0 0.5 1; 0.5 0 0.5 1" />
		<animate
		  attributeName="cy"
		  dur="4s"
		  calcMode="spline"
		  repeatCount="indefinite"
		  values="10; 60; 110; 60; 10"
		  keyTimes="0; 0.25; 0.5; 0.75; 1"
		  keySplines="0.5 0 0.5 1; 0.5 0 0.5 1; 0.5 0 0.5 1; 0.5 0 0.5 1" />
	  </circle>
	</svg>
		`
		let a = this.querySelector('a')
		a.addEventListener('click', () => { loadRouteFromLink(event, a.href) } )
    }

	disconnectedCallback() {
        document.querySelector('header').style.display = 'flex'
	}
    
}
