import React, {Component} from 'react';
import {data} from 'testData';
import DataApi from 'DataApi';
import ArticleList from 'components/ArticleList';

const api = new DataApi(data);

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: api.getArticles(),
      authors: api.getAuthors()
    };
  }

  articleActions = {
    lookupAuthor: authorId => this.state.authors[authorId]
  };

  render() {
    return (
      <div>
        <ArticleList
          articles={this.state.articles}
          actions={this.articleActions}
        />
      </div>
    );
  }
}

export default App;