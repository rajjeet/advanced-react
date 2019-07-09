import React, {PureComponent} from 'react';
import ArticleList from 'components/ArticleList';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';
import pickBy from 'lodash.pickby';
import Timestamp from './Timestamp';

class App extends PureComponent {

  static childContextTypes = {
    store: PropTypes.object
  };

  getChildContext() {
    return {
      store: this.props.store
    };
  }

  getAppState = () => {
    const {articles, searchTerm} = this.props.store.getState();
    return {articles, searchTerm};
  };

  state = this.getAppState();

  onStoreChange = () => {
    this.setState(this.getAppState());
  };

  componentDidMount() {
    this.subscriptionId = this.props.store.subscribe(this.onStoreChange);
    this.props.store.startClock();
  }

  componentWillUnmount() {
    this.props.store.unsubscribe(this.subscriptionId);
  }

  render() {
    let {articles, searchTerm} = this.state;
    if (searchTerm) {
      articles = pickBy(articles, value => {
        return value.title.match(searchTerm) || value.body.match(searchTerm);
      });
    }
    return (
      <>
        <Timestamp/>
        <SearchBar/>
        <ArticleList
          articles={articles}
        />
      </>
    );
  }
}

export default App;