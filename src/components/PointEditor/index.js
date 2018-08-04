import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import './style.css';

class PointEditor extends Component {
  render() {
    return (
      <div className="point-editor">
        <input type="text" className="name" placeholder="Point name" />
        <input type="number" className="amount-percent" placeholder="0%" min="1" max="100" />
        <div className="left-percents">Left 5% for points</div>
        <button>Save</button>
      </div>
    );
  }
}

PointEditor.propTypes = {
  
};

// function mapStateToProps(state) {
//   return {

//   };
// }

export default connect(null, null)(PointEditor);