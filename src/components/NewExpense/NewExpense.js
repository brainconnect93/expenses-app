import React from 'react'
import ExpensForm from './ExpensForm'
import './NewExpense.css'

const NewExpense = (props) => {
  const saveExpenseHandler = (enterExpense) => {
    const expenseData = {
      ...enterExpense,
      id: Math.random().toString()
    };
    props.addExpenseData(expenseData)
  }
  return (
    <div className='new-expense'>
      <ExpensForm saveExpenseData={saveExpenseHandler} />
    </div>
  )
}

export default NewExpense