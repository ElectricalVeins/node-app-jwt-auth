import React               from 'react';
import PropTypes           from 'prop-types';
import { Route, Redirect } from 'react-router-dom';

const AccessRoute = ( { permissions, to, ...rest } ) => {
	const user = JSON.parse( sessionStorage.getItem( 'user' ) );


	return user && user.roles.some( role => permissions.includes( role ) )
				 ? <Route {...rest} />
				 : <Redirect to={to}/>
};

AccessRoute.propTypes = {
	roles: PropTypes.arrayOf( PropTypes.string ).isRequired
};

export default AccessRoute;