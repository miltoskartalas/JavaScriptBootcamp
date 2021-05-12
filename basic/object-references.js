let myAccount = {
    name: 'Miltos Kartalas',
    expenses: 0,
    income: 0
}

// referncing sto idio object
let addIncome = function(account, income ) {

    account.income =  account.income + income
} 

let ResetAccount = function(account) {
    
    account.income = 0
    account.expenses = 0
}


let getSummary = function(account) {
    account.expenses = 50
    console.log(`Acount for ${account.name} has ${account.income - account.expenses}, ${account.income} in income and ${account.expenses} 
    in expenses`)
}

addIncome(myAccount, 100)

getSummary(myAccount)
