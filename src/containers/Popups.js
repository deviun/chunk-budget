import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

/**
 * @class Popups
 * @description Manager popup windows
 */
class Popups extends Component {
  render() {
    return (
      <div>Open popups: {JSON.stringify(this.props.open)}</div>
    );
  }
}

Popups.propTypes = {
  open: PropTypes.arrayOf(PropTypes.number).isRequired
};

function mapStateToProps(state) {
  return {
    open: state.popups
  };
}

export default connect(mapStateToProps, null)(Popups);