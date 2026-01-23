type IncomeStream = 'salary' | 'bonus' | 'freelance'
type ExpensesCategory = 'rent' | 'food' | 'travelling'

type FinanceRecord<T extends string> = Record<T,number>

interface Transactions<T extends string>{
  readonly id:number
  category:T
  amount:number
  type:"expense" | "income"
}

class FinanceManager<I extends string,E extends string>{
  private expenses:FinanceRecord<E>
  private incomes:FinanceRecord<I>
  private transactions:Transactions<I | E>[] = []
  
  constructor(incomes:FinanceRecord<I>,expenses:FinanceRecord<E>){
    this.expenses = expenses
    this.incomes = incomes
  }

  getTotal<T extends Record<string,number>>(data:T):number{
    let ans = Object.values(data).reduce((a,b)=>a+b,0)
    return ans
  }

  showExpenses():void{
    console.log(`EXPENSES`);
    for (const key in this.expenses) {
      console.log(
       `${key} ->  ${this.expenses[key as keyof FinanceRecord<E>]}  `
      );
    }  
  }

  showIncomes():void{
    console.log(`INCOMES`);
    for (const key in this.incomes) {
      console.log(
       `${key} ->  ${this.incomes[key as keyof typeof this.incomes]}  `
      );
    }  
  }

  get netbalance():number{
    return this.getTotal(this.incomes) - this.getTotal(this.expenses)
  }

  addIncomes<T extends I>(id:number,category:T,amount:number){
    this.incomes[category] += amount
    this.transactions.push({
      id,
      amount,
      category,
      type:'income'
    })
  }

  addExpenses<T extends E>(id:number,category:T,amount:number){
    this.expenses[category] += amount
    this.transactions.push({
      id,
      amount,
      category,
      type:'expense'
    })
  }

  getTransactions():readonly Transactions<I|E>[]{
    return this.transactions
  }
}

const user = new FinanceManager<IncomeStream , ExpensesCategory>({salary:500000000,bonus:5000000000,freelance:5000000000},{food:100000000,rent:100000000,travelling:1000000000})

console.log(user.netbalance);
user.showExpenses()
user.showIncomes()
