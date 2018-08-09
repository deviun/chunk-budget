import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import './style.css';

class PointEditor extends Component {
  render() {
    return (
      <div className="point-editor">
        <input type="text" value={this.props.form.name} className="name" placeholder="Point name" />
        <input type="number" value={this.props.form.amountPercent} className="amount-percent" placeholder="0%" min="1" max="100" />
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
  }).isRequired
};

function mapStateToProps(state) {
  return {
    form: state.pointEditor
  };
}

export default connect(mapStateToProps, null)(PointEditor);