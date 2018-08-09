import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import './style.css';

// actions
import closePopup from '../../actions/closePopup';

class Popup extends Component {
  constructor (props) {
    super(props);

    this.closePopup = (event) => {
      if (event.currentTarget === event.target) { 
        props.closePopup(props.id);
      }
    };
  }
  render() {
    return (
      <div className="popup-box" id={this.props.id} onClick={this.closePopup}>
        <div className="box">
          <div className="popup-name">{this.props.name}</div>
          <div className="popup-content">
            {this.props.children}
          </div>
        </div>
      </div>
    );
  }
}

Popup.propTypes = {
  name: PropTypes.string.isRequired,
  closePopup: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired
};

// function mapStateToProps(state) {
//   return {
    
//   };
// }

function mapDispatchToProps (dispatch) {
  return {
    closePopup: (id) => dispatch(closePopup(id))
  }
}

export default connect(null, mapDispatchToProps)(Popup);