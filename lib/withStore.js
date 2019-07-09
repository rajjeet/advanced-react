import React from 'react';
import PropTypes from 'prop-types';

const WithStore = (getExtraProps = () => ({})) => Component => {
  return class extends React.PureComponent {
    static contextTypes = {
      store: PropTypes.object
    };

    static displayName = `${Component.name}Container`;

    usedState = () => {
      return getExtraProps(this.context.store, this.props);
    };

    state = this.usedState();

    onStoreChange = () => {
      if (this.subscriptionId) {
        this.setState(this.usedState());
      }
    };

    componentDidMount() {
      this.subscriptionId = this.context.store.subscribe(this.onStoreChange);
    }

    componentWillUnmount() {
      this.context.store.unsubscribe(this.subscriptionId);
      this.subscriptionId = null;
    }

    render() {
      return (
        <Component
          {...this.props}
          {...this.usedState()}
          store={this.context.store}
        />
      );
    }
  };
};

export default WithStore;