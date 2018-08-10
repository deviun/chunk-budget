import {
  TURN_EDIT_CELL,
  SAVE_CELL_VALUE,
  CREATE_POINT,
  EDIT_POINT,
  DELETE_POINT
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
      amountPercent: 0.13 // from amount of incomes (by default: 0.4/0.6)
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
      amount: 135000,
      comment: 'Some comment for test'
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
  } else if (action.type === CREATE_POINT) {
    const newState = { ...state };
    const lastPoint = newState.points[newState.points.length - 1];

    newState.points.push({
      name: action.form.name,
      amountPercent: action.form.amountPercent / 100,
      id: lastPoint.id + 1
    });

    return newState;
  } else if (action.type === EDIT_POINT) {
    const newState = { ...state };
    const point = newState.points.find((p) => p.id === action.id);

    point.name = action.form.name;
    point.amountPercent = action.form.amountPercent / 100;

    return newState;
  } else if (action.type === DELETE_POINT) {
    const newState = { ...state };
    
    newState.points = newState.points.filter((p) => p.id !== action.pointId);

    return newState;
  }

  return state;
}