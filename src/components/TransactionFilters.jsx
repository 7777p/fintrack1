import './TransactionFilters.css'
import {categories} from "../data/categories.js";

function TransactionFilters({search,setSearch,typeFilter,setTypeFilter,categoryFilter, setCategoryFilter}) {

    return (
        <div className="transaction-filter">
            <input
                type="text"
                placeholder="Поиск операции..."
                value={search} onChange={(event) => {
                    setSearch(event.target.value)
                }}
            />

            <select value ={typeFilter} onChange={(event) => {setTypeFilter(event.target.value)}}>
                <option value="all">Все</option>
                <option value="доход">Доходы</option>
                <option value="расход">Расходы</option>
            </select>

            <select
                value={categoryFilter}
                onChange={(event) => {
                    setCategoryFilter(event.target.value)
                }}
            >
                <option value="all">Все категории</option>
                {categories.map(category => (
                    <option
                        key={category}
                        value={category}
                    >
                        {category}
                    </option>
                ))}

            </select>


        </div>
    )
}

export default TransactionFilters;