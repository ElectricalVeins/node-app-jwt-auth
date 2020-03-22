import React      from 'react';
import AppContext from '../../../redux/store';

function withAppContext( WrappedComponent ) {
  return ( props ) => {
    return (
      <AppContext.Consumer>
        {
          value => ( <WrappedComponent {...props} {...value} /> )
        }
      </AppContext.Consumer>
    );
  };
}