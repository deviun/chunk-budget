import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import './style.css';

// actions
import modPointEditor from '../../actions/modPointEditor';

class PointEditor extends Component {
  constructor (props) {
    super(props);

    // reset form when init component
    this.props.modPointEditor({
      name: '',
      amountPercent: 0
    });

    this.modName = (e) => {
      const nextForm = { ...this.props.form };

      nextForm.name = e.target.value;

      this.props.modPointEditor(nextForm);
    };

    this.modAmountPercent = (e) => {
      if (e.target.value > 100 || e.target.value < 0) {
        return;
      }

      const nextForm = { ...this.props.form };

      nextForm.amountPercent = Number(e.target.value);

      this.props.modPointEditor(nextForm);
    };
  }

  render() {
    let leftPercent = this.props.points.reduce((left, point) => {
      left -= point.amountPercent * 100;

      return left;
    }, 100);

    leftPercent -= this.props.form.amountPercent;

    const saveButton = <button>Save</button>;

    return (
      <div className="point-editor">
        <input type="text" maxLength="24" onChange={this.modName} value={this.props.form.name} className="name" placeholder="Point name" />
        <input type="number" onChange={this.modAmountPercent} value={this.props.form.amountPercent} className="amount-percent" placeholder="0%" min="1" max="100" />
        <div className="left-percents">Left {leftPercent}% for points</div>
        {leftPercent > 0 && saveButton}
      </div>
    );
  }
}

PointEditor.propTypes = {
  form: PropTypes.shape({
    name: PropTypes.string.isRequired,
    amountPercent: PropTypes.number.isRequired
  }).isRequired,
  modPointEditor: PropTypes.func.isRequired,
  points: PropTypes.arrayOf(PropTypes.object).isRequired
};

function mapStateToProps(state) {
  return {
    form: state.pointEditor,
    points: state.expenseTable.points
  };
}

function mapDispatchToProps (dispatch) {
  return {
    modPointEditor: (nextForm) => dispatch(modPointEditor(nextForm))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PointEditor);