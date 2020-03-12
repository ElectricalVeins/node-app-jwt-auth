import React from 'react';
import AppContext from '../../state';

export default function withAppContext (WrappedComponent) {
  return (props) => {
    return (
      <AppContext.Consumer>
        {
          value => (<WrappedComponent {...props} {...value} />)
        }
      </AppContext.Consumer>
    );
  };
}