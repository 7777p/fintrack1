import './ExpenseStats.css'

function ExpenseStats({transactions}) {
  const expenses =  transactions.filter(
      transaction => transaction.type === 'расход'
  )

    const totalExpenses = expenses.reduce(
        (total, transaction) => total + transaction.amount,0
    )

    const expensesByCategory = expenses.reduce(
        (result, transaction) => {
            const category = transaction.category

            if (!result[category]) {
                result[category] = 0
            }
            result[category] += transaction.amount

            return result
        },
        {}
    )

    const categories = Object.entries(expensesByCategory)
    return (
        <section className="expense-stats">

            <h2>Расходы по категориям</h2>

            {categories.map(([category, amount]) => {

                const percentage =
                    totalExpenses > 0
                        ? (amount / totalExpenses) * 100
                        : 0

                return (
                    <div
                        className="expense-category"
                        key={category}
                    >

                        <div className="expense-category-header">

                            <span>{category}</span>

                            <span>
                                {new Intl.NumberFormat('ru-RU').format(amount)} ₽
                            </span>

                        </div>

                        <div className="expense-bar">

                            <div
                                className="expense-bar-fill"
                                style={{
                                    width: `${percentage}%`
                                }}
                            />

                        </div>

                    </div>
                )
            })}

        </section>
    )

}
export default ExpenseStats