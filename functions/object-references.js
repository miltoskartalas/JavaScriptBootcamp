let myAccount = {
    name: 'Miltos Kartalas',
    expenses: 0,
    income: 0
}

// referncing sto idio object
let otherAccount = myAccount
otherAccount.income = 1000
otherAccount = {}
let addExpense = function (account, amount) {
    account = {}
    //  account.expenses = account.expenses + amount
    console.log(account)
}


addExpense(myAccount,2.5)
console.log(myAccount)