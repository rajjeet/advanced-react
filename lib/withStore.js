import React from 'react';
import PropTypes from 'prop-types';

const WithStore = getExtraProps => Component => {
  return class extends React.PureComponent {
    static contextTypes = {
      store: PropTypes.object
    };

    static displayName = `${Component.name}Container`;

    onStoreChange = () => {
      this.forceUpdate();
    };

    componentDidMount() {
      this.subscriptionId = this.context.store.subscribe(this.onStoreChange);
    }

    componentWillUnmount() {
      this.context.store.unsubscribe(this.subscriptionId);
    }

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