import React from 'react';
import withStore from '../withStore';

const Timestamp = ({timestamp}) => {
  return (
    <div>
      {timestamp || '<Timestamp>'}
    </div>
  );
};

const extraProps = store => {
  return {
    timestamp: store.getState().timestamp
  };
};

export default withStore(extraProps)(Timestamp);