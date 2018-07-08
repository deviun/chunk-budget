// import { ADD_POINT, ADD_EXPENSE } from '../actionTypes';

const testExpenseTable = {
  expenses: [
    {
      id: 0,
      name: 'Rent',
      amount: 12000,
      comment: 'Some comment for test'
    }
  ],
  points: [
    {
      id: 0,
      name: 'First Part',
      amountPercent: 0.4 // from amount of incomes (by default: 0.4/0.6)
    }, {
      id: 1,
      name: 'Second Part',
      amountPercent: 0.6
    }
  ],
  incomes: [
    {
      id: 0,
      name: 'Salary',
      amount: 135000 
    }
  ] 
};

export default function expenseTable(state = testExpenseTable, action) {
  switch (action.type) {
    default:
      return state;
  }
}