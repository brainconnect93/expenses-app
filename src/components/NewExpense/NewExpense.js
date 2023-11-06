import React, { useState } from 'react'
import ExpenseForm from './ExpenseForm'
import './NewExpense.css'

const NewExpense = (props) => {
  const [isEditing, setIsEditing] = useState(false)

  const startEditingHandler = () => {
    setIsEditing(true);
  }

  const stopEditingHandler = () => {
    setIsEditing(false);
  }

  const saveExpenseHandler = (enterExpense) => {
    const expenseData = {
      ...enterExpense,
      id: Math.random().toString()
    };
    props.addExpenseData(expenseData);
    setIsEditing(false)
  }

  return (
    <div className='new-expense'>
      {!isEditing && (<button onClick={startEditingHandler}>Add New Expense</button>)}
      {isEditing && (<ExpenseForm saveExpenseData={saveExpenseHandler} onCancel={stopEditingHandler} /> )}
    </div>
  )
}

export default NewExpense