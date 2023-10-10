import { useState } from "react";
import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";

const Expenses = (props) => {
  const [filterYear, setFilterYear] = useState('2020')

  const filterChangeHandler = selectYear => {
    setFilterYear(selectYear)
  }

  const filterExpense = props.items.filter(expense => {
    return expense.date.getFullYear().toString() === filterYear
  })
  
  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter onChangeYear={filterYear} onSelectYear={filterChangeHandler} />
        {filterExpense.map((product) => <ExpenseItem 
          key={product.id}
          title={product.title}
          amount={product.amount}
          date={product.date}
        />)}
      </Card>
    </div>
  );
};

export default Expenses;
