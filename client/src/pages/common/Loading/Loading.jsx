import React from 'react';
import Common from '../../../containers/Common/Common';
import Spinner from '../../../components/common/Spinner/Spinner';

const Loading = props => {
  return (
    <Common>
      <Spinner />
    </Common>
  );
};

export default Loading;
