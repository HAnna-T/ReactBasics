import React, { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const [isEditign, setIsEditign] = useState(false);
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    setIsEditign(false);
  };
  const startEditingHandler = () => {
    setIsEditign(true);
  };
  const stopEditingHandler = () => {
    setIsEditign(false);
  };
  return (
    <div className="new-expense">
      {!isEditign && (
        <button onClick={startEditingHandler}>Add new expense</button>
      )}
      {isEditign && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={stopEditingHandler}
        />
      )}
    </div>
  );
};
export default NewExpense;
