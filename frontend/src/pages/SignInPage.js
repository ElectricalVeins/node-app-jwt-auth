import React          from 'react';
import { withRouter } from 'react-router';
import Navigation     from '../components/Navigation';
import SignInForm     from '../components/SignInForm';
import styles from './SignInPage.module.scss'

const SignInPage = props => {

  return (
    <div className={styles.formWrapper}>
      <h1 className={styles.loginText}>login to your account</h1>
      <SignInForm/>
    </div>
  );
};

export default withRouter( SignInPage );