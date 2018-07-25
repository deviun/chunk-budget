import {
  TURN_EDIT_CELL
} from '../actionTypes';

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

const mapCellTypeToTableGroup = {
  expense: 'expenses',
  point: 'points',
  income: 'incomes'
};

export default function expenseTable(state = testExpenseTable, action) {
  switch (action.type) {
    case TURN_EDIT_CELL:
      const newState = {...state};
      const cell = newState[mapCellTypeToTableGroup[action.cellType]].find((item) => item.id === action.id);

      if (!cell.editMode) {
        cell.editMode = {};
      }

      cell.editMode[action.propName] = !cell.editMode[action.propName];

      return newState;
    default:
      return state;
  }
}