import React, { Component } from 'react';
import {connect} from 'react-redux';
import ArticleList from '../containers/ArticleList';

import changeSomeText from '../actions/changeSomeText';
import 'bootstrap/dist/css/bootstrap.css';

class App extends Component {
  constructor (props) {
    super(props);

    this.state = {
      someText: props.someText,
      articles: props.articles
    };

    this.changeSomeText = this.props.changeSomeText;
  }

  componentWillReceiveProps (nextProps) {
    this.setState({
      articles: nextProps.articles,
      someText: nextProps.someText
    });
  }

  render () {
    return (
      <div className="container">
        <input type="text" value={this.state.someText} onChange={this.changeSomeText} placeholder="Some text" />
        <h2>Articles</h2>
        <ArticleList articles={this.state.articles} someText={this.state.someText} />
      </div>
    );
  }
}

function mapStateToProps (state) {
  return {
    articles: state.articlesList,
    someText: state.someText
  };
}

function mapDispatchToProps (dispatch) {
  return {
    changeSomeText: function (event) {
      dispatch(changeSomeText(event.target.value))
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);