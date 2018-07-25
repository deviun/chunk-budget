import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import turnEditCell from '../../actions/turnEditCell';

class ChangeableCell extends Component {
  constructor (props) {
    super(props);

    this.toChange = props.toChange;
  }

  render () {
    return (
      <div 
        className={classNames(this.props.classNames)} 
        key={this.props.type + this.props.id} 
        onClick={this.toChange.bind(null, this.props.type, this.props.id)}
      >
        {this.props.value}
        {this.props.editMode && '(edit mode)'}
      </div>
    );
  }
}

ChangeableCell.propTypes = {
  id: PropTypes.number.isRequired,
  type: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]).isRequired,
  classNames: PropTypes.any,
  editMode: PropTypes.bool
};

function mapDispatchToProps (dispatch) {
  return {
    toChange: (type, id) => dispatch(turnEditCell(type, id))
  };
}

export default connect(null, mapDispatchToProps)(ChangeableCell);