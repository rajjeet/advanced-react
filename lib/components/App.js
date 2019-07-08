import React, {Component} from 'react';
import ArticleList from 'components/ArticleList';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';
import pickBy from 'lodash.pickby';

class App extends Component {

  state = this.props.store.getState();
  static childContextTypes = {
    store: PropTypes.object
  };

  getChildContext() {
    return {
      store: this.props.store
    };
  }

  doSearch = (searchTerm) => this.setState({searchTerm});

  render() {
    let {articles, searchTerm}= this.state;
    if (searchTerm){
      articles = pickBy(articles, value => {
        return value.title.match(searchTerm) || value.body.match(searchTerm);
      });
    }
    return (
      <>
        <SearchBar doSearch={this.doSearch}/>
        <ArticleList
          articles={articles}
        />
      </>
    );
  }
}

export default App;