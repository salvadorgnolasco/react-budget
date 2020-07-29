import ExpeseForm from './components/ExpenseForm';
import ExpenseList from './components/ExpenseList';
import Alert from './components/Alert';

import { v4 as uuidv4 } from 'uuid';

import React, { useState } from 'react';

import './App.css';

const initialExpenses = [
  { id: uuidv4(), charge: "rent", amount: 1600 },
  { id: uuidv4(), charge: "car payment", amount: 400 },
  { id: uuidv4(), charge: "credit card bill", amount: 1200 }
];

function App() {

  /**
   * States
   */
  const [expenses, setExpenses] = useState(initialExpenses);
  const [id, setId] = useState(uuidv4());
  const [charge, setCharge] = useState('');
  const [amount, setAmount] = useState('');
  const [alert, setAlert] = useState({ show: false });
  // const [edit, setEdit] = useState({edit: false});

  /**
   * Events
   */
  const handleCharge = e => {
    setCharge(e.target.value);
  };

  const handleAmount = e => {
    setAmount(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (charge !== '' && amount > 0) {
      const singleExpense = { id, charge, amount };
      setExpenses([...expenses, singleExpense]);
      handleAlert({ type: "success", text: "Item added", });
      setCharge('');
      setAmount('');
    } else {
      handleAlert({ type: 'danger', text: "charge can´t be empty value and ammount has to be bigger than zero" });
    }
  };

  const handleAlert = ({ type, text }) => {
    setAlert({ show: true, type, text });
    setTimeout(() => { setAlert({ show: false }) }, 3000);
  };

  const handleClearExpenses = () => {
    setExpenses([]);
  };

  const handleDelete = id => {
    const expensesFiltered = expenses.filter(expense => expense.id !== id);
    setExpenses([...expensesFiltered]);
    handleAlert({ type: 'danger', text: 'item deleted' });
  };

  const handleEdit = id => {
    const expenseToEdit = expenses.filter(expense => expense.id === id)[0];
    setId(expenseToEdit.id);
    setCharge(expenseToEdit.charge);
    setAmount(expenseToEdit.amount);

    const expensesFiltered = expenses.filter(expense => expense.id !== id);
    setExpenses([...expensesFiltered]);
  }

  /**
   * Render App
   */
  return (
    <React.Fragment>
      {alert.show && <Alert type={alert.type} text={alert.text} />}
      <h1>budget calculator</h1>
      <main className="App">
        <ExpeseForm
          charge={charge}
          amount={amount}
          handleAmount={handleAmount}
          handleCharge={handleCharge}
          handleSubmit={handleSubmit} />
        <ExpenseList
          expenses={expenses}
          handleClearExpenses={handleClearExpenses}
          handleDelete={handleDelete}
          handleEdit={handleEdit} />
      </main>
      <h1>Total spending: <span className="total">
        $ {expenses.reduce((accumulated, curr) => {
          return accumulated += parseInt(curr.amount);
        }, 0)}</span>
      </h1>
    </React.Fragment>
  );
}

export default App;
