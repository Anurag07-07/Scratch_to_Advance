// type IncomeStream = 'salary' | 'bonus' | 'freelance'
// type ExpenseCategory = 'houserent' | 'food' | 'travelling'

type IncomeStream = 'salary' | 'bonus' | 'freelance'
type ExpenseCategory = 'rent' | 'food' | 'travelling'

type FinanceRecord<T extends string> = Record<T,number>

interface Transaction<T extends string>{
  readonly id:number
  type:'expense' | 'income'
  category:T
  amount:number
}

class FinanceManager<I extends string,E extends string>{
  private incomes:FinanceRecord<I>
  private expenses:FinanceRecord<E>
  private transactions:Transaction<I | E>[] = []
  
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
        `
        ${key} -> ${this.expenses[key as keyof typeof this.expenses]}
        `
      );
    }
  }

  showIncomes():void{
    console.log(`INCOMES`);
    for (const key in this.incomes) {
      console.log(
        `
        ${key} -> ${this.incomes[key as keyof typeof this.incomes]}
        `
      );
    }
  }

  addIncomes<T extends I>(id:number,category:T,amount:number){
    this.incomes[category]+=amount
    this.transactions.push({
      id,
      category,
      amount,
      type:'income'
    })
  }

  addExpenses<T extends E>(id:number,category:T,amount:number){
    this.expenses[category]+=amount
    this.transactions.push({
      id,
      category,
      amount,
      type:'expense'
    })
  }

  getTransactions():readonly Transaction<I | E>[]{
    return this.transactions
  }

  get netbalance():number{
    return this.getTotal(this.incomes) - this.getTotal(this.expenses)
  }
}


const finance = new FinanceManager<IncomeStream,ExpenseCategory>(
  { salary: 5000, bonus: 1200, freelance: 800 },
  { food: 900, houserent: 2000, travelling: 300 },
)


finance.addIncomes(1,'salary',500)
finance.addExpenses(1,'food',2000)

console.log(finance.getTransactions());

finance.showExpenses()
finance.showIncomes()
