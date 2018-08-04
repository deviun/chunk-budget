import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import './style.css';

class PointEditor extends Component {
  render() {
    return (
      <div className="point-editor">
        <input type="text" placeholder="Point name" />
        <input type="number" placeholder="Amount percent" min="1" max="100" />
        <div>Left 5% for points</div>
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