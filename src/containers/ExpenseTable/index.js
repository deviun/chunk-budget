import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import get from 'lodash/get';

import './style.css';

import ChangeableCell from '../../components/ChangeableCell';

class ExpenseTable extends Component {
  render() {
    const pointsCell = this.props.table.points.map((point) => (
      <div className="cell" key={'point-' + point.id}>
        Amount/{point.name}
      </div>
    ));
    let expenseAmount = 0;
    const expenseRow = this.props.table.expenses.map((expense) => {
      expenseAmount += Number(expense.amount);
      return (
        <div className="row" key={'expense-' + expense.id}>
          <ChangeableCell
            type="expense"
            id={expense.id}
            сkey={'expense-name-' + expense.id}
            value={expense.name}
            editMode={get(expense, 'editMode.name')}
            propName="name"
          />
          <ChangeableCell 
            classNames={['align-center']}
            type="expense"
            id={expense.id}
            editInputType="number"
            сkey={'expense-value-' + expense.id}
            value={expense.amount}
            editMode={get(expense, 'editMode.amount')}
            propName="amount"
          />
          {
            this.props.table.points.map((point) => (
              <div className="cell align-center" key={'expense-point-' + point.id}>
                {expense.amount * point.amountPercent}
              </div>
            ))
          }
          <ChangeableCell
            classNames={['cell-comment']}
            type="expense"
            id={expense.id}
            сkey={'expense-comment-' + expense.id}
            value={expense.comment}
            editMode={get(expense, 'editMode.comment')}
            propName="comment"
          />
        </div>
      );
    });
    let incomeAmount = 0;
    const incomeRow = this.props.table.incomes.map((income) => {
      incomeAmount += Number(income.amount);
      return (
        <div className="row" key={'income-' + income.id}>
          <ChangeableCell
            type="income"
            id={income.id}
            сkey={'income-name-' + income.id}
            value={income.name}
            editMode={get(income, 'editMode.name')}
            propName="name"
          />
          <ChangeableCell
            classNames={['align-center']}
            type="income"
            id={income.id}
            editInputType="number"
            сkey={'income-value-' + income.id}
            value={income.amount}
            editMode={get(income, 'editMode.amount')}
            propName="amount"
          />
          {
            this.props.table.points.map((point) => (
              <div className="cell align-center" key={'income-' + point.id}>
                {income.amount * point.amountPercent}
              </div>
            ))
          }
        </div>
      )
    });
    const balance = incomeAmount - expenseAmount;

    return (
      <div className="expense-table">
        {/* first row */}
        <div className="row row-bold" key="row-1">
          <div className="cell" key="cell-1">
            Expense
          </div>
          <div className="cell" key="cell-2">
            Amount/Period
          </div>
          {/* << render point cell titles */}
          {pointsCell}
          {/* end >> */}
          <div className="cell button-action" key="cell-3">
            Add Point
          </div>
        </div>
        {/* << render expense rows */}
        {expenseRow}
        {/* end >> */}
        <div className="row" key="row-2">
          <div className="cell button-action align-center" key="cell-1">
            Add Expense
          </div>
        </div>
        <div className="row row-bold" key="row-3">
          <div className="cell" key="cell-1">
            Income
          </div>
          <div className="cell" key="cell-2">
            Amount/Period
          </div>
          {/* << render point cell titles */}
          {pointsCell}
          {/* end >> */}
        </div>
        {/* << render incomes rows */}
        {incomeRow}
        {/* end >> */}
        <div className="row" key="row-4">
          <div className="cell button-action align-center" key="cell-1">
            Add Income
          </div>
        </div>
        <div className="row row-blue" key="row-5">
          <div className="cell" key="cell-1">Balance</div>
          <div className="cell align-center" key="cell-2">
            {balance}
          </div>
          {
            this.props.table.points.map((point) => (
              <div className="cell align-center" key={'balance-point-' + point.id}>
                {balance * point.amountPercent}
              </div>
            ))
          }
        </div>
      </div>
    );
  }
}

ExpenseTable.propTypes = {
  table: PropTypes.shape({
    expenses: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      amount: PropTypes.number.isRequired,
      comment: PropTypes.string,
      editMode: PropTypes.object
    })),
    points: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      amountPercent: PropTypes.number.isRequired,
      editMode: PropTypes.object
    })),
    incomes: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      amount: PropTypes.number.isRequired,
      editMode: PropTypes.object
    }))
  })
};

function mapStateToProps (state) {
  return {
    table: state.expenseTable
  };
}

export default connect(mapStateToProps, null)(ExpenseTable)