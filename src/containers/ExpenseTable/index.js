import React, { Component } from 'react';
import { connect } from 'react-redux';

import './style.css';

class ExpenseTable extends Component {
  constructor(props) {
    super(props);

    this.state = {
      table: props.table
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({});
  }

  render() {
    const pointsCell = this.state.table.points.map((point) => (
      <div className="cell" key={point.id}>
        Amount/{point.name}
      </div>
    ));
    let expenseAmount = 0;
    const expenseRow = this.state.table.expenses.map((expense) => {
      expenseAmount += Number(expense.amount);
      return (
        <div className="row">
          <div className="cell">{expense.name}</div>
          <div className="cell align-center">{expense.amount}</div>
          {
            this.state.table.points.map((point) => (
              <div className="cell align-center">
                {expense.amount * point.amountPercent}
              </div>
            ))
          }
          <div className="cell cell-comment">{expense.comment}</div>
        </div>
      );
    });
    let incomeAmount = 0;
    const incomeRow = this.state.table.incomes.map((income) => {
      incomeAmount += Number(income.amount);
      return (
        <div className="row">
          <div className="cell">{income.name}</div>
          <div className="cell align-center">{income.amount}</div>
          {
            this.state.table.points.map((point) => (
              <div className="cell align-center">
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
        <div className="row row-bold">
          <div className="cell">
            Expense
          </div>
          <div className="cell">
            Amount/Period
          </div>
          {/* << render point cell titles */}
          {pointsCell}
          {/* end >> */}
          <div className="cell button-action">
            Add Point
          </div>
        </div>
        {/* << render expense rows */}
        {expenseRow}
        {/* end >> */}
        <div className="row">
          <div className="cell button-action align-center">
            Add Expense
          </div>
        </div>
        <div className="row row-bold">
          <div className="cell">
            Income
          </div>
          <div className="cell">
            Amount/Period
          </div>
          {/* << render point cell titles */}
          {pointsCell}
          {/* end >> */}
        </div>
        {/* << render incomes rows */}
        {incomeRow}
        {/* end >> */}
        <div className="row">
          <div className="cell button-action align-center">
            Add Income
          </div>
        </div>
        <div className="row row-blue">
          <div className="cell">Balance</div>
          <div className="cell align-center">
            {balance}
          </div>
          {
            this.state.table.points.map((point) => (
              <div className="cell align-center">
                {balance * point.amountPercent}
              </div>
            ))
          }
        </div>
      </div>
    );
  }
}

function mapStateToProps (state) {
  return {
    table: state.expenseTable
  };
}

export default connect(mapStateToProps, null)(ExpenseTable)