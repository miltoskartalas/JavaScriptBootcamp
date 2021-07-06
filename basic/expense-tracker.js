const account = {
    name: 'Miltos Kartalas',
    expenses: [],
    income: [],
    addExpense: function(description , amount) {
        account.expenses.push({
            description:  description,
            amount: amount
    
        })
    },
    getAccountSummary: function() {
        let totalExpenses = 0 
        this. expenses.forEach(function(expense) {
            totalExpenses += expense.amount
        })
        return `${this.name} has $${totalExpenses} in expenses .`
    },
    addIncome: function (description , amount) {
        this.income.push ({
            description: description,
            anmount: amount
        })
    }
}

//expense -> description 
//addExpense , getAccountSummary
//getAccountSummary -> total up all expenses -< Miltos Kartalas has $X in expenses



account.addExpense('Rent', 950)
account.addExpense('Coffee',2)
console.log(account.getAccountSummary())