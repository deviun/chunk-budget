import React, { Component } from 'react';
import { connect } from 'react-redux';

// actions
import startApp from '../../actions/startApp';

// styles
import './style.css';

const PUBLIC_URL = process.env.PUBLIC_URL;

class WelcomePage extends Component {
  constructor(props) {
    super(props);

    this.state = {};
    this.startApp = props.startApp;
  }

  render() {
    return (
      <div className="welcome-page">
        <div className="icon">
          <img src={PUBLIC_URL + '/img/wallet.svg'} />
        </div>
        <div className="description">
          App for balancing expenses.
        </div>
        <button className="start-button" onClick={this.startApp}>Start</button>
      </div>
    );
  }
}

function mapDispatchToProps (dispatch) {
  return {
    startApp: () => {
      dispatch(startApp());
    }
  };
}

export default connect(null, mapDispatchToProps)(WelcomePage);