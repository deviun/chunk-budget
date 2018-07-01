import React, { Component } from 'react';
import { connect } from 'react-redux';

import deleteArticle from '../actions/deleteArticle';

class Article extends Component {
  state = {
    isOpen: false
  };

  handleClick = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };

  render () {
    const { article, deleteArticle, someText } = this.props;
    const body = this.state.isOpen && <h3>{article.text}</h3>

    return (
      <div>
        <h2>
          {article.title}
          <button onClick={this.handleClick}>{
            this.state.isOpen ? 'close' : 'open'
          }</button>
        </h2>
        {body}
        {deleteArticle && <button onClick={deleteArticle.bind(null, article.id)}>Delete article</button>}
        Some text: {someText}
      </div>
    );
  }
}

function mapDispatchToProps (dispatch) {
  return {
    deleteArticle: (id) => {
      dispatch(deleteArticle(id));
    }
  };
}

export default connect(null, mapDispatchToProps)(Article);