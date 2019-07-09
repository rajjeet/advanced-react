import React, {Component} from 'react';
import withStore from '../withStore';

class Timestamp extends Component {

  render() {
    let {timestampDisplay} = this.props;
    return (
      <div>
        {timestampDisplay}
      </div>
    );
  }
}

const extraProps = store => {
  return {
    timestampDisplay: store.getState().timestamp.toLocaleTimeString(['en-US'], {hour: '2-digit', minute: '2-digit'})
  };
};

export default withStore(extraProps)(Timestamp);