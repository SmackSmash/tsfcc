import React from 'react';
import Admin from '../../../containers/Admin/Admin';
import Spinner from '../../../components/common/Spinner/Spinner';

const Loading = props => {
  return (
    <Admin>
      <Spinner />
    </Admin>
  );
};

export default Loading;
