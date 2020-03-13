import React from 'react';
import {withFormik, Form, Field}         from 'formik';
import Input                             from "../Input";
import * as Yup                          from 'yup';
import styles                            from './SignUpForm.module.scss'
import {CustomField}                     from "../SignInForm";
import { PASSWORD_REGEXP, PASSWORD_TIP } from '../../../constants';

const signUpSchema = Yup.object().shape({
    firstName: Yup.string().trim().min(4).max(255).required(),
    lastName: Yup.string().trim().min(4).max(255).required(),
    email: Yup.string().email().required(),
    password: Yup.string().min(8).matches(PASSWORD_REGEXP,PASSWORD_TIP).required(),
    confirmPassword: Yup.string().min(8).oneOf([Yup.ref('password'), null], 'Passwords must match').required(),
});

const SignUpForm = (props) => {
    const {
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
    } = props;

    return (
        <Form className={styles.formContainer}>

            <CustomField name='firstName' type='text' placeholder='First Name'/>
            <CustomField name='lastName' type='text' placeholder='Last Name'/>
            <CustomField name='email' type='email' placeholder='Email'/>
            <CustomField name='password' type='password' placeholder='Password'/>
            <CustomField name='confirmPassword' type='password' placeholder='Confirm Password'/>

            <button type="submit"
                    className={styles.submitButton}
                    disabled={isSubmitting}>
                Create account
            </button>
        </Form>
    );
};

export default withFormik({
    mapPropsToValues: () => ({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: '',
    }),
    handleSubmit: (values, formikBag) => {
        console.log(values);
        console.log(formikBag);
    },
    validationSchema: signUpSchema,
})(SignUpForm);