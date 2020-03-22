import React          from 'react';
import { withRouter } from 'react-router';
import { Redirect }   from 'react-router-dom';
import SignInForm     from '../../components/forms/SignInForm';
import styles         from './SignInPage.module.scss'
import { NavLink }    from "react-router-dom";
import withAppContext from "../../components/HoCs/withAppContext";

const SignInPage = props => {

	const { user, setUser } = props;

	const formSubmitHandler = ( user ) => {
		setUser( user );
	};

	if( user ) {
		return <Redirect to={'/'}/>
	}

	return (
		<div className={styles.screenSignIn}>
			<div className={styles.loginLinkWrapperSignIn}>
				<NavLink to="/">
					<img src="https://www.squadhelp.com/img/logo.png" alt="logo"/>
				</NavLink>
				<NavLink className={styles.loginLinkSignIn} to="/signup">Sign Up</NavLink>
			</div>
			<div className={styles.formWrapperSignIn}>
				<h1 className={styles.loginTextSignIn}>login to your account</h1>
				<SignInForm onSubmit={formSubmitHandler}/>
			</div>
		</div>
	);
};

export default withRouter( SignInPage );