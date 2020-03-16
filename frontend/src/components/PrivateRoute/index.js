import React               from 'react';
import PropTypes           from 'prop-types';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ( { permissions, to, ...rest } ) => {
	const user = JSON.parse( sessionStorage.getItem( 'user' ) );


	return user.roles.some( role => permissions.includes( role ) )
				 ? <Route {...rest} />
				 : <Redirect to={to}/>
};

PrivateRoute.propTypes = {
	roles: PropTypes.arrayOf( PropTypes.string ).isRequired
};

export default PrivateRoute;