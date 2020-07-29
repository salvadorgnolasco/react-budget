import ExpenseItem from './ExpenseItem';

import { MdDelete } from 'react-icons/md';

import React from 'react';

const ExpenseList = (props) => {
  const { expenses, handleClearExpenses, handleDelete, handleEdit } = props;

  return (
    <div>
      <ul className="list">
        {
          expenses.map((expense) => {
            return (
              <ExpenseItem
                key={expense.id}
                expense={expense}
                handleDelete={handleDelete}
                handleEdit={handleEdit}>
              </ExpenseItem>
            );
          })
        }
      </ul>
      {expenses.length > 0 &&
        <button className="btn" onClick={handleClearExpenses}>
          clear expenses
          <MdDelete className="btn-icon"></MdDelete>
        </button>}

    </div>
  )
}

export default ExpenseList;