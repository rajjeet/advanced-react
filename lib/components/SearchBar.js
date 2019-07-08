import React, {Component} from 'react';
import debounce from 'lodash.debounce';

class SearchBar extends Component {
  state = {
    searchTerm: ''
  };

  doSearch = debounce(() => {
    this.props.doSearch(this.state.searchTerm);
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

export default SearchBar;