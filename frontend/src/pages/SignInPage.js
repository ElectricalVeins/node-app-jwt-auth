import React from 'react';
import {withRouter} from 'react-router';
import Navigation from '../components/Navigation';
import SignInForm from '../components/SignInForm';
import styles from './SignInPage.module.scss'
import {NavLink} from "react-router-dom";

const SignInPage = props => {

    return (
        <div className={styles.screenSignIn}>
            <div className={styles.loginLinkWrapperSignIn}>
                <img src="https://www.squadhelp.com/img/logo.png" alt=""/>
                <NavLink className={styles.loginLinkSignIn} to="/signup">Sign Up</NavLink>
            </div>
            <div className={styles.formWrapperSignIn}>
                <h1 className={styles.loginTextSignIn}>login to your account</h1>
                <SignInForm/>
            </div>
        </div>
    );
};

export default withRouter(SignInPage);