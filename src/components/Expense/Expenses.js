import { useState } from "react";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";

const Expenses = (props) => {
  const [filterYear, setFilterYear] = useState("2020");

  const filterChangeHandler = (selectYear) => {
    setFilterYear(selectYear);
  };

  const filterExpense = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filterYear;
  });

  // <---- Second Method ---->

  // let expenseContent = <p>No Expense Added Yet</p>

  // if (filterExpense.length > 0) {
  //   expenseContent = filterExpense.map((product) => (
  //     <ExpenseItem
  //       key={product.id}
  //       title={product.title}
  //       amount={product.amount}
  //       date={product.date}
  //     />
  //   ))
  // }

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          onChangeYear={filterYear}
          onSelectYear={filterChangeHandler}
        />
        {/* {filterExpense.length === 0 ? (
          <p>No Expenses Added Yet</p>
        ) : (
          filterExpense.map((product) => (
            <ExpenseItem
              key={product.id}
              title={product.title}
              amount={product.amount}
              date={product.date}
            />
          ))
        )} */}
        <ExpensesList items={filterExpense}/>
      </Card>
    </div>
  );
};

export default Expenses;
