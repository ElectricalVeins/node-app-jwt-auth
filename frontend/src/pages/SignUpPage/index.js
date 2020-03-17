import React                 from 'react';
import { withRouter }        from 'react-router';
import Navigation            from '../../components/Navigation';
import SignUpForm            from '../../components/forms/SignUpForm';
import styles                from './SignUpPage.module.scss'
import { NavLink, Redirect } from "react-router-dom";
import withAppContext        from "../../components/HoCs/withAppContext";

const SignUpPage = ( props ) => {

  const { user, setUser } = props;

  const formSubmitHandler = ( user ) => {
    setUser( user );
  };

  if( user ) {
    return <Redirect to={'/'}/>
  }


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
        <SignUpForm onSubmit={formSubmitHandler}/>
            </div>
        </div>
    );
};

export default withAppContext( withRouter( SignUpPage ) );