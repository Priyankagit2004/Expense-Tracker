// script.js

let expenses = [];  // Store all expenses in an array

function addExpense() {
  const description = document.getElementById('description').value;
  const amount = parseFloat(document.getElementById('amount').value);
  const category = document.getElementById('category').value;

  if (description === "" || isNaN(amount) || amount <= 0) {
    alert("Please fill in all fields correctly!");
    return;
  }

  const expense = {
    description,
    amount,
    category,
  };

  expenses.push(expense);
  displayExpenses();
  calculateTotal();
  
  // Reset input fields after adding an expense
  document.getElementById('description').value = '';
  document.getElementById('amount').value = '';
  document.getElementById('category').value = 'food';  // Optionally reset category to default
}

function displayExpenses() {
  const expenseList = document.getElementById('expense-list');
  expenseList.innerHTML = "";  // Clear previous list

  expenses.forEach((expense, index) => {
    const expenseItem = document.createElement('div');
    expenseItem.classList.add('expense-item');
    
    expenseItem.innerHTML = `
      <span>${expense.description} - $${expense.amount} (${expense.category})</span>
      <button onclick="deleteExpense(${index})">Delete</button>
    `;
    
    expenseList.appendChild(expenseItem);
  });
}

function deleteExpense(index) {
  expenses.splice(index, 1);  // Remove the expense at the specified index
  displayExpenses();           // Re-render the expense list
  calculateTotal();            // Recalculate the total expenses
}

function calculateTotal() {
  const total = expenses.reduce((sum, expense) => sum + expense.amount, 0);
  document.getElementById('total').textContent = total.toFixed(2);
}
