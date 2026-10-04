import BalanceCard from './components/BalanceCard';
import TransactionItem from './components/TransactionItem'
import TransactionForm from './components/TransactionForm';
import {useState} from 'react'
import './App.css';
import TransactionFilters from "./components/TransactionFilters.jsx";


function App() {

    const [search, setSearch] = useState('');
    const [typeFilter, setTypeFilter] = useState('all')
    const [categoryFilter, setCategoryFilter] = useState('all')
    const [transactions, setTransactions] = useState([
        {
            id:1,
            title:"Зарплата",
            amount:85000,
            type:"доход",
            category:'Работа'
        },
        {
            id:2,
            title: "Продукты",
            amount: 1800,
            type: "расход",
            category:'Еда'
        },
        {
            id: 3,
            title: "Транспорт",
            amount: 1800,
            type: "расход",
            category:'Транспорт'
        },
        {
            id: 4,
            title: "Фриланс",
            amount: 15000,
            type: "доход",
            category:'Работа'
        }
    ])

    const incomes= transactions.filter(
        transaction => transaction.type === "доход"
    )

    const expenses= transactions.filter(
        transaction=> transaction.type === "расход"
    )

    const totalIncome = incomes.reduce(
        (total, transaction) => total + transaction.amount,0
    )

    const totalExpense= expenses.reduce(
        (total, transaction) => total + transaction.amount,0
    )

    const balance = totalIncome - totalExpense

    const filteredTransactions = transactions.filter(transaction => {

        const matchesSearch =
            transaction.title
                .toLowerCase()
                .includes(search.toLowerCase())

        const matchesType =
            typeFilter === 'all' ||
            transaction.type === typeFilter

        const matchesCategory =
            categoryFilter === 'all' ||
            transaction.category === categoryFilter

        return matchesSearch && matchesType && matchesCategory
    })


    function addTransaction(transaction) {
        setTransactions(prevTransaction => [
            ...prevTransaction, transaction
        ])
    }

    function deleteTransaction(id) {
        setTransactions(prevTransactions =>
        prevTransactions.filter(
            transaction => transaction.id !== id
        ))
    }

    return (
       <div className="App">
           <header className="App-header">
               <h1>Financial control</h1>
               <p>Мой финансовый трекер</p>
           </header>
           <main className="App-main">
               <section className="balance-section">
                   <BalanceCard title="Баланс" amount={balance}/>
                   <BalanceCard title="Доходы" amount={totalIncome}/>
                   <BalanceCard title="Расходы" amount={totalExpense}/>
               </section>
               <section className="form-section">
               <TransactionForm onAddTransaction={addTransaction}/>
               </section>
               <section className="transaction-section">
                   <h2>Последние операции:</h2>
                   <TransactionFilters search={search} setSearch={setSearch} typeFilter={typeFilter} setTypeFilter={setTypeFilter} categoryFilter={categoryFilter} setCategoryFilter={setCategoryFilter}
                   />
                  {/*<div className="transaction-filters">*/}
                  {/* <input type="text" placeholder="Поиск операции..." value={search} onChange={(e) => setSearch(e.target.value)}/>*/}
                  {/* <select*/}
                  {/*     value={typeFilter}*/}
                  {/*     onChange={(event) => {*/}
                  {/*         setTypeFilter(event.target.value)*/}
                  {/*     }}*/}
                  {/* >*/}
                  {/*     <option value="all">Все</option>*/}
                  {/*     <option value="доход">Доходы</option>*/}
                  {/*     <option value="расход">Расходы</option>*/}
                  {/* </select>*/}
                  {/* <select*/}
                  {/*     value={categoryFilter}*/}
                  {/*     onChange={(event) => {*/}
                  {/*         setCategoryFilter(event.target.value)*/}
                  {/*     }}*/}
                  {/* >*/}
                  {/*     <option value="all">*/}
                  {/*         Все категории*/}
                  {/*     </option>*/}

                  {/*     {categories.map(category => (*/}
                  {/*         <option*/}
                  {/*             key={category}*/}
                  {/*             value={category}*/}
                  {/*         >*/}
                  {/*             {category}*/}
                  {/*         </option>*/}
                  {/*     ))}*/}
                  {/* </select>*/}
                  {/*</div>*/}
                   <div className="transaction">
                       {filteredTransactions.map(transaction=>(
                           <TransactionItem key={transaction.id} transaction={transaction} onDelete={deleteTransaction}/>
                       ))}
                   </div>
               </section>

           </main>


       </div>
    )
}

export default App