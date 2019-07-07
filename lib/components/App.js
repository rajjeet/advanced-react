import React, {Component} from 'react';
import DataApi from 'state-api';
import ArticleList from 'components/ArticleList';
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: {},
      authors: {}
    };
  }

  async componentDidMount() {
    let response = await axios.get('/data');
    const api = new DataApi(response.data);
    this.setState(() => ({
      articles: api.getArticles(),
      authors: api.getAuthors()
    }));

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