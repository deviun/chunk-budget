import React, { Component } from 'react';
import {connect} from 'react-redux';
import Article from '../../components/Article';
import './style.css';

class ArticleList extends Component {
  constructor (props) {
    super(props);

    this.state = {
      articles: props.articles,
      someText: props.someText
    };

    this.defaultProps = {
      articles: [],
      someText: ''
    };
  }

  componentWillReceiveProps (nextProps) {
    this.setState({
      someText: nextProps.someText,
      articles: nextProps.articles
    });
  }

  render () {
    const articles = this.state.articles;
    const articlesElements = articles.map((article) =>
      <li key={article.id} className="article-list__li">
        <Article someText={this.state.someText} article={article} />
      </li>
    );

    return (
      <ul>
        {articlesElements}
      </ul>
    );
  } 
}

export default connect()(ArticleList)