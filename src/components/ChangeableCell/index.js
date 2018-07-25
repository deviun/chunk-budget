import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import concat from 'lodash/concat';

import turnEditCell from '../../actions/turnEditCell';
import saveCellValue from '../../actions/saveCellValue';

class ChangeableCell extends Component {
  constructor (props) {
    super(props);

    this.toChange = props.toChange.bind(null, props.type, props.id, props.propName);
    this.toSave = (e) => {
      this.props.saveCellValue(props.type, props.id, props.propName, e.target.value);
    }
  }

  render () {
    const elClassNamesDefault = ['cell', 'changeable-cell'];
    const elClassNamesCustom = this.props.classNames || [];
    const elClassNames = concat(elClassNamesDefault, elClassNamesCustom);

    const editInput = (
      <input 
        type={this.props.editInputType || 'text'} 
        value={this.props.value} 
        placeholder="Cell value" 
        ref={(input) => { this.editInput = input; }} 
        onChange={this.toSave}
        onBlur={this.toChange}
      />
    );

    return (
      <div 
        className={classNames(elClassNames)} 
        key={this.props.сkey} 
        onClick={this.toChange}
      >
        {!this.props.editMode && this.props.value}
        {this.props.editMode && editInput}
      </div>
    );
  }

  componentDidUpdate () {
    if (this.editInput) {
      this.editInput.focus();
    }
  }
}

ChangeableCell.propTypes = {
  id: PropTypes.number.isRequired,
  type: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]).isRequired,
  editInputType: PropTypes.string,
  сkey: PropTypes.string.isRequired,
  classNames: PropTypes.arrayOf(PropTypes.string),
  editMode: PropTypes.bool,
  toChange: PropTypes.func.isRequired,
  saveCellValue: PropTypes.func.isRequired
};

function mapDispatchToProps (dispatch) {
  return {
    toChange: (type, id, propName) => dispatch(turnEditCell(type, id, propName)),
    saveCellValue: (type, id, propName, value) => dispatch(saveCellValue(type, id, propName, value))
  };
}

export default connect(null, mapDispatchToProps)(ChangeableCell);