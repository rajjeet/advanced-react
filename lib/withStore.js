import React from 'react';
import PropTypes from 'prop-types';

const WithStore = getExtraProps => Component => {
  return class extends React.Component {
    static contextTypes = {
      store: PropTypes.object
    };

    static displayName = `${Component.name}Container`;

    render() {
      return (
        <Component
          {...this.props}
          {...getExtraProps(this.context.store, this.props)}
          store={this.context.store}
        />
      );
    }
  };
};

export default WithStore;