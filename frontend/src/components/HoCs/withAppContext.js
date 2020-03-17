import React      from 'react';
import AppContext from '../../store';

export default function withAppContext( WrappedComponent ) {
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