import React, { Component } from 'react';
import { connect } from 'react-redux';

import './style.css';

class Header extends Component {
  constructor (props) {
    super(props);
  }

  render () {
    const RightButton = (
      <div className="right-button">
        <button>Import</button>
        <button>Export</button>
      </div>
    );

    return (
      <div className="main-header">
        <div className="logo-text">Chunk Budget</div>
        {!this.props.isWelcome && RightButton}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    isWelcome: state.welcome.mode
  };
}

export default connect(mapStateToProps, null)(Header);