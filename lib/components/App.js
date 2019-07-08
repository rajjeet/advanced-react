import React, {Component} from 'react';
import ArticleList from 'components/ArticleList';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: this.props.initialData.articles,
      authors: this.props.initialData.authors
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