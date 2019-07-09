import React, {Component} from 'react';
import ArticleList from 'components/ArticleList';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';
import pickBy from 'lodash.pickby';
import Timestamp from './Timestamp';

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

  onStoreChange = () => {
    this.setState(this.props.store.getState());
  };

  componentDidMount() {
    this.subscriptionId = this.props.store.subscribe(this.onStoreChange);
    this.props.store.startClock();
  }

  componentWillUnmount() {
    this.props.store.unsubscribe(this.subscriptionId);
  }

  render() {
    let {articles, searchTerm}= this.state;
    if (searchTerm){
      articles = pickBy(articles, value => {
        return value.title.match(searchTerm) || value.body.match(searchTerm);
      });
    }
    return (
      <>
        <Timestamp />
        <SearchBar doSearch={this.props.store.setSearchTerm}/>
        <ArticleList
          articles={articles}
        />
      </>
    );
  }
}

export default App;