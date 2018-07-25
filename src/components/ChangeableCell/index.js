import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import concat from 'lodash/concat';

import turnEditCell from '../../actions/turnEditCell';


class ChangeableCell extends Component {
  constructor (props) {
    super(props);

    this.toChange = props.toChange.bind(null, props.type, props.id, props.propName);
  }

  render () {
    const elClassNamesDefault = ['cell', 'changeable-cell'];
    const elClassNamesCustom = this.props.classNames || [];
    const elClassNames = concat(elClassNamesDefault, elClassNamesCustom);

    return (
      <div 
        className={classNames(elClassNames)} 
        key={this.props.сkey} 
        onClick={this.toChange}
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
  сkey: PropTypes.string.isRequired,
  classNames: PropTypes.arrayOf(PropTypes.string),
  editMode: PropTypes.object
};

function mapDispatchToProps (dispatch) {
  return {
    toChange: (type, id, propName) => dispatch(turnEditCell(type, id, propName))
  };
}

export default connect(null, mapDispatchToProps)(ChangeableCell);