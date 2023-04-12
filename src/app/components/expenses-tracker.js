class ExpenseTracker extends HTMLElement {
	constructor() {
	  super();
  
	  this.transactions = JSON.parse(localStorage.getItem('transactions')) || [];
  
	  const template = document.getElementById('expense-tracker').content;
	  const shadowRoot = this.attachShadow({ mode: 'open' });
	
	shadowRoot.innerHTML = `
		<style>
			#input-amount {
				width: 50px;
			}
		</style>
	
	`
	  
	
	  shadowRoot.appendChild(template.cloneNode(true));
  
	  this.descriptionInput = this.shadowRoot.getElementById('input-description');
	  this.amountInput = this.shadowRoot.getElementById('input-amount');
	  this.addButton = this.shadowRoot.getElementById('button-add');
	  this.transactionList = this.shadowRoot.getElementById('transaction-list');
	  this.balanceSpan = this.shadowRoot.getElementById('balance');
  
	  this.addButton.addEventListener('click', () => this.addTransaction());
	  this.render();
	}
  
	addTransaction() {
	  const description = this.descriptionInput.value;
	  const amount = this.amountInput.value;
	  const transaction = { description, amount };
	  this.transactions.push(transaction);
	  localStorage.setItem('transactions', JSON.stringify(this.transactions));
	  this.render();
	}
  
	render() {
	  this.transactionList.innerHTML = '';
	  let balance = 0;
	  this.transactions.forEach(transaction => {
		const li = document.createElement('li');
		li.textContent = `${transaction.description} (${transaction.amount})`;
		this.transactionList.appendChild(li);
		balance += Number(transaction.amount);
	  });
	  this.balanceSpan.textContent = balance;
	}
  }
  
  customElements.define('expense-tracker', ExpenseTracker);
