import React, {Component} from 'react';
import ArticleList from 'components/ArticleList';
import PropTypes from 'prop-types';

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

  render() {
    return (
      <div>
        <ArticleList
          articles={this.state.articles}
        />
      </div>
    );
  }
}

export default App;