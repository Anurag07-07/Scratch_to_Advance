"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class FinanceManager {
    incomes;
    expenses;
    transactions = [];
    constructor(incomes, expenses) {
        this.expenses = expenses;
        this.incomes = incomes;
    }
    getTotal(data) {
        let ans = Object.values(data).reduce((a, b) => a + b, 0);
        return ans;
    }
    showExpenses() {
        console.log(`EXPENSES`);
        for (const key in this.expenses) {
            console.log(`
        ${key} -> ${this.expenses[key]}
        `);
        }
    }
    showIncomes() {
        console.log(`INCOMES`);
        for (const key in this.incomes) {
            console.log(`
        ${key} -> ${this.incomes[key]}
        `);
        }
    }
    addIncomes(id, category, amount) {
        this.incomes[category] += amount;
        this.transactions.push({
            id,
            category,
            amount,
            type: 'income'
        });
    }
    addExpenses(id, category, amount) {
        this.expenses[category] += amount;
        this.transactions.push({
            id,
            category,
            amount,
            type: 'expense'
        });
    }
    getTransactions() {
        return this.transactions;
    }
    get netbalance() {
        return this.getTotal(this.incomes) - this.getTotal(this.expenses);
    }
}
const finance = new FinanceManager({ salary: 5000, bonus: 1200, freelance: 800 }, { food: 900, houserent: 2000, travelling: 300 });
finance.addIncomes(1, 'salary', 500);
finance.addExpenses(1, 'food', 2000);
console.log(finance.getTransactions());
finance.showExpenses();
finance.showIncomes();
//# sourceMappingURL=FinanceTrackerX.js.map