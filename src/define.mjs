export function define (...components) {
	for (let component of components) 
		customElements.define(component.selector, component)
}
