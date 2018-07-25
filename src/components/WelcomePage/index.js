import React, { Component } from 'react';
import { connect } from 'react-redux';
import publicURL from '../../abstract/publicURL';
import PropTypes from 'prop-types';

// actions
import startApp from '../../actions/startApp';

// styles
import './style.css';

class WelcomePage extends Component {
  constructor(props) {
    super(props);

    this.startApp = props.startApp;
  }

  render() {
    return (
      <div className="welcome-page">
        <div className="icon">
          <img src={publicURL('/img/wallet.svg')} alt="" />
        </div>
        <div className="description">
          App for balancing expenses.
        </div>
        <button className="start-button" onClick={this.startApp}>Start</button>
      </div>
    );
  }
}

WelcomePage.propTypes = {
  startApp: PropTypes.func.isRequired
};

function mapDispatchToProps (dispatch) {
  return {
    startApp: () => {
      dispatch(startApp());
    }
  };
}

export default connect(null, mapDispatchToProps)(WelcomePage);