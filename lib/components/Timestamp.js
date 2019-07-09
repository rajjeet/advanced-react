import React from 'react';

const Timestamp = ({timestamp}) => {
  return (
    <div>
      {timestamp || '<Timestamp>'}
    </div>
  );
};

export default Timestamp;