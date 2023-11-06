import "./ExpensesList.css";
import ExpenseItem from "./ExpenseItem";

const ExpensesList = (props) => {
  if (props.items.length === 0) {
    return <h2 className="expenses-list__fallback">No Expenses Found</h2>
  }
  
  return (
    <ul className="expenses-list">
      {props.items.map((product) => (
      <ExpenseItem
        key={product.id}
        title={product.title}
        amount={product.amount}
        date={product.date}
      />
    ))}
    </ul>
  )
};

export default ExpensesList;
