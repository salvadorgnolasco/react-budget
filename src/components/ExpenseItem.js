
import { MdEdit, MdDelete } from 'react-icons/md';

import React from 'react';

const ExpenseItem = (props) => {

  const { expense, handleDelete, handleEdit } = props;
  const { id, charge, amount } = expense;

  return (
    <li className="item">
      <div className="info">
        <span className="expense">{charge}</span>
        <span className="amount">${amount}</span>
      </div>
      <button className="edit-btn" onClick={() => handleEdit(id)}>
        <MdEdit />
      </button>
      <button className="clear-btn" onClick={() => handleDelete(id)} >
        <MdDelete />
      </button>
    </li>
  )
}

export default ExpenseItem;