import './TransactionItem.css'

function transactionItem({transaction, onDelete}) {
    const isIncome = transaction.type === 'доход'
    return (
        <div className="transaction-item">
            <div className="transaction-info">
                <span className="transaction-title">{transaction.title}</span>
                <span className="transaction-type">
                    {isIncome ? 'Доход' : 'Расход'} ✶ {transaction.category}
                </span>
            </div>
            <div className="transaction-right">

                <span
                    className={
                        isIncome
                            ? 'transaction-amount income'
                            : 'transaction-amount expense'
                    }
                >
                    {isIncome ? '+' : '-'}
                    {transaction.amount} руб.
                </span>
            {/*<span className="transaction-amount">{transaction.amount} руб.</span>*/}
            <button onClick={() => onDelete(transaction.id)}>Удалить</button>
            </div>
        </div>


    )

}
export default  transactionItem