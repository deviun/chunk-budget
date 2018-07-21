import React, { Component } from 'react';
import {connect} from 'react-redux';

import Header from './Header';
import WelcomePage from './WelcomePage';
import ExpenseTable from '../containers/ExpenseTable';

class App extends Component {
  constructor (props) {
    super(props);
  }

  render () {
    return (
      <div>
        <Header />
        {this.props.isWelcome && <WelcomePage />}
        {!this.props.isWelcome && <ExpenseTable />}
      </div>
    );
  }
}

function mapStateToProps (state) {
  return {
    isWelcome: state.welcome.mode
  };
}

function mapDispatchToProps (dispatch) {
  return {
    // changeSomeText: function (event) {
    //   dispatch(changeSomeText(event.target.value))
    // }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);