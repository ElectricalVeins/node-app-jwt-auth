import React from 'react';
import {withRouter} from 'react-router';
import Navigation from '../components/Navigation';
import SignUpForm from '../components/SignUpForm';
import styles from './SignUpPage.module.scss'
import {NavLink} from "react-router-dom";

const SignUpPage = (props) => {

    return (
        <div className={styles.screenSignUp}>
            <div className={styles.loginLinkWrapperSignUp}>
                <img src="https://www.squadhelp.com/img/logo.png" alt="logo"/>
                <NavLink className={styles.loginLinkSignUp} to="/login">Login</NavLink>
            </div>
            <div className={styles.formWrapperSignUp}>
                <div className={styles.textWrapperSignUp}>
                    <h1 className={styles.loginTextH1}>CREATE AN ACCOUNT</h1>
                    <h2 className={styles.loginTextH2}>We always keep your name and email address private.</h2>
                </div>
                <SignUpForm/>
            </div>
        </div>
    );
};

export default withRouter(SignUpPage);