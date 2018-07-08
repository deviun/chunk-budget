import React, { Component } from 'react';
import {connect} from 'react-redux';

import Header from './Header';
import WelcomePage from './WelcomePage';
import ExpenseTable from '../containers/ExpenseTable';

class App extends Component {
  constructor (props) {
    super(props);

    this.state = {
      isWelcome: props.isWelcome
    };
  }

  componentWillReceiveProps (nextProps) {
    this.setState({
      isWelcome: nextProps.isWelcome
    });
  }

  render () {
    return (
      <div>
        <Header />
        {this.state.isWelcome && <WelcomePage />}
        {!this.state.isWelcome && <ExpenseTable />}
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