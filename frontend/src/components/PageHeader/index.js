import React from 'react';
import withAppContext from '../HoCs/withAppContext.js';

const PageHeader = (props) => {
  return (
    <header>
      {JSON.stringify(props, null, 4)}
    </header>
  );
};

export default withAppContext(PageHeader);