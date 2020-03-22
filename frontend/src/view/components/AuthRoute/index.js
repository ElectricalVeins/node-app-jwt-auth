import { Route, Redirect } from 'react-router-dom';
import React               from 'react';
import PropTypes           from 'prop-types';

const AuthRoute = ( { to, ...props } ) => {
	return (
		props.user
		? <Route  {...props} />
		: <Redirect to={to}/>
	);
};

AuthRoute.propTypes = {};

export default AuthRoute;