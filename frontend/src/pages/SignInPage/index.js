import React          from 'react';
import { withRouter } from 'react-router';
import SignInForm     from '../../components/forms/SignInForm';
import styles         from './SignInPage.module.scss'
import { NavLink }    from "react-router-dom";

const Index = props => {

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
				<SignInForm/>
			</div>
		</div>
	);
};

export default withRouter( Index );