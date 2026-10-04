import './BalanceCard.css'
function BalanceCard({title, amount}) {
    return (
        <div className="balance-card">
            <h2>{title}:</h2>
            <p>{amount} руб.</p>
        </div>
    )
}
export default BalanceCard;