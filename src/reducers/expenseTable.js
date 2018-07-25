import {
  TURN_EDIT_CELL,
  SAVE_CELL_VALUE
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
  if (action.type === TURN_EDIT_CELL) {
    const newState = { ...state };
    const cell = newState[mapCellTypeToTableGroup[action.cellType]].find((item) => item.id === action.id);

    if (!cell.editMode) {
      cell.editMode = {};
    }

    Object.keys(cell).forEach((prop) => {
      if (prop === 'editMode') {
        return false;
      }

      if (prop === action.propName) {
        cell.editMode[action.propName] = !cell.editMode[action.propName];
      } else {
        cell.editMode[prop] = false;
      }
    });

    return newState;
  } else if (action.type === SAVE_CELL_VALUE) {
    const newState = { ...state };

    const cell = newState[mapCellTypeToTableGroup[action.cellType]].find((item) => item.id === action.id);
    
    cell[action.propName] = action.value;

    return newState;
  } 

  return state;
}