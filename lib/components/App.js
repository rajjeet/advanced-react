import React, {Component} from 'react';
import {data} from '../testData';
import DataApi from '../DataApi';
import ArticleList from './ArticleList';

const api = new DataApi(data);

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: api.getArticles(),
      authors: api.getAuthors()
    };
  }

  render() {
    return (
      <div>
        <ArticleList
          articles={this.state.articles}
          authors={this.state.authors}
        />
      </div>
    );
  }
}

export default App;