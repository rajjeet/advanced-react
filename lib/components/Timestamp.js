import React, {Component} from 'react';
import withStore from '../withStore';

class Timestamp extends Component {

  shouldComponentUpdate(nextProps) {
    return this.getTimeDisplay(nextProps.timestamp) !== this.getTimeDisplay(this.props.timestamp);
  }

  render() {
    let {timestamp} = this.props;
    return (
      <div>
        {this.getTimeDisplay(timestamp)}
      </div>
    );
  }

  getTimeDisplay = (timestamp) => {
    return timestamp.toLocaleTimeString(['en-US'], {hour: '2-digit', minute: '2-digit'});
  }
}

const extraProps = store => {
  return {
    timestamp: store.getState().timestamp
  };
};

export default withStore(extraProps)(Timestamp);