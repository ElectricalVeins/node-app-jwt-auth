import { Route, Redirect } from 'react-router-dom';
import React               from 'react';
import PropTypes           from 'prop-types';
import withAppContext      from "../HoCs/withAppContext";

const AuthRoute = ( { to, ...props } ) => {
	return (
		props.user
		? <Route  {...props} />
		: <Redirect to={to}/>
	);
};

AuthRoute.propTypes = {};

export default withAppContext( AuthRoute );