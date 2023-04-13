//import {tab} from "../../utils.mjs"

import {selectTab} from "../router.mjs"

export class AboutPage extends HTMLElement {

	static selector = 'app-about'

	connectedCallback() {
		this.innerHTML = `
	<expense-tracker>
			
		<template id="expense-tracker">
			<h2>Expense Tracker</h2>
			<div>
			  <label for="input-description">Description</label>
			  <input id="input-description" type="text" />
			</div>
			<div>
			  <label for="input-amount">Amount</label>
			  <input id="input-amount" type="number" />
			</div>
			<button id="button-add">Add</button>
			<div>
			  <h3>Transaction History</h3>
			  <ul id="transaction-list"></ul>
			  <p>Balance: <span id="balance"></span></p>
			</div>
		  </template>
	</expense-tracker>
		`
		//Array(100).fill('<p>We are a team of developers.</p>').join('')
        selectTab('/about')
	}		

    disconnectedCallback() {
        //tab('/about')
    }   
        
}
