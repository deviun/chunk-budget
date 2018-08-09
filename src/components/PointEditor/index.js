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
      if (e.target.value > 100) {
        return;
      }

      const nextForm = { ...this.props.form };

      nextForm.amountPercent = Number(e.target.value);

      this.props.modPointEditor(nextForm);
    };
  }

  render() {
    return (
      <div className="point-editor">
        <input type="text" onChange={this.modName} value={this.props.form.name} className="name" placeholder="Point name" />
        <input type="number" onChange={this.modAmountPercent} value={this.props.form.amountPercent} className="amount-percent" placeholder="0%" min="1" max="100" />
        <div className="left-percents">Left 5% for points</div>
        <button>Save</button>
      </div>
    );
  }
}

PointEditor.propTypes = {
  form: PropTypes.shape({
    name: PropTypes.string.isRequired,
    amountPercent: PropTypes.number.isRequired
  }).isRequired,
  modPointEditor: PropTypes.func.isRequired
};

function mapStateToProps(state) {
  return {
    form: state.pointEditor
  };
}

function mapDispatchToProps (dispatch) {
  return {
    modPointEditor: (nextForm) => dispatch(modPointEditor(nextForm))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PointEditor);