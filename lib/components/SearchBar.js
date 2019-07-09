import React, {Component} from 'react';
import debounce from 'lodash.debounce';
import withStore from '../withStore';

class SearchBar extends Component {
  state = {
    searchTerm: ''
  };

  doSearch = debounce(() => {
    this.props.store.setSearchTerm(this.state.searchTerm);
  }, 300);

  handleChange = ({target}) => {
    let searchTerm = target.value;
    this.setState({
      searchTerm
    }, this.doSearch);
  };

  render() {
    return (
      <input
        placeholder={'Search articles'}
        onChange={this.handleChange}
        value={this.state.searchTerm}
      />
    );
  }
}

export default withStore()(SearchBar);