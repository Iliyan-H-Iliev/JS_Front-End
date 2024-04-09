document.body.innerHTML =`
<body>
    <h1>Expense Tracker</h1>
    <main id="main">
      <div id="wallet-container">
        <div id="form-container">
          <form class="expense-content">
            <label for="expense">Expense Type</label>
            <input type="text" id="expense" />
            <label for="amount">Amount</label>
            <input type="number" id="amount" />
            <label for="date">Date</label>
            <input type="date" id="date" />

            <button type="button" id="add-btn">Add</button>
          </form>
        </div>
      </div>
      <div id="right-container">
        <div id="preview">
          <h2>Preview</h2>
          <ul id="preview-list"></ul>
        </div>
        <div id="expenses">
          <h2>Expenses</h2>
          <ul id="expenses-list"></ul>
          <button class="btn delete">Delete</button>
        </div>
      </div>
    </main>
    <script src="./app.js"></script>
  </body>
`
result();
const addScore = {
    expense: () => document.getElementById("expense"),
    amount: () => document.getElementById("amount"),
    date: () => document.getElementById("date"),
    addBtn: () => document.getElementById("add-btn"),
    approveBtns: () => document.querySelectorAll('.ok'),
    candidatesList: () => document.getElementById('preview-list'),
    editBtns: () => document.querySelectorAll('.edit'),
    previewList: () => document.getElementById('expenses-list')
}

addScore.expense().value = "Food"
addScore.amount().value = "50"
addScore.date().value = "20.10.2023"

addScore.addBtn().click();

expect($(document.querySelector("#preview-list")).length).to.equal(1, "Expense is not added successfully!")