import {useState} from 'react'
import './TransactionForm.css'
import { categories } from '../data/categories'

function TransactionForm({onAddTransaction}) {
// последнее обновление
    const [title, setTitle] = useState('')
    const [amount, setAmount] = useState('')
    const [type, setType] = useState('')
    const [error, setError] = useState('')
    const [category, setCategory] = useState('Другое')


    function handleSubmit(event) {
        event.preventDefault()

        if (!title.trim()) {
            setError('Введите название операции')
            return
        }

        if (!amount || Number(amount) <= 0) {
            setError('Введите сумму больше 0')
            return
        }

        const newTransaction = {
            id: Date.now(),
            title: title.trim(),
            amount: Number(amount),
            type: type,
            category: category
        }

        onAddTransaction(newTransaction)

        setTitle('')
        setAmount('')
        setError('')
    }

    return (
        <form className="transaction-form" onSubmit={handleSubmit}>
            <h2>Новая операция</h2>
            {error && <p className="form-error">{error}</p>}
            <div className="form-fields">

            <input
                type="text"
                placeholder="Название операции"
            value={title}
            onChange={e => setTitle(e.target.value)}/>
                <select
                    value={category}
                    onChange={(event) => {
                        setCategory(event.target.value)
                    }}
                >
                    {categories.map(category => (
                        <option
                            key={category}
                            value={category}
                        >
                            {category}
                        </option>
                    ))}
                </select>
            <input
                type="number"
                placeholder="Сумма"
                value={Number(amount)}
                onChange={e => setAmount(e.target.value)}
            />

            <select
            value={type}
            onChange={e => setType(e.target.value)}>
                <option value="расход">Расход</option>
                <option value="доход">Доход</option>

            </select>

            <button type="submit">Добавить</button>
            </div>

        </form>
    )
}
export default TransactionForm