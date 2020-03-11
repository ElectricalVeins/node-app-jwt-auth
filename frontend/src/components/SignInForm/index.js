import React from 'react';
import {Form, Field, withFormik} from 'formik';
import Input from '../Input';
import * as Yup from 'yup';
import styles from './SignInForm.module.scss'

const loginSchema = Yup.object().shape({
    email: Yup.string().email().required(),
    password: Yup.string().min(8).required()
});

const SignInForm = (props) => {
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
        <Form className={styles.formContainer} >
            <Field

                name="email"
            >
                {
                    (emailProps) => (<Input {...emailProps}

                                            type="email"
                                            label={'Email'}/>)
                }
            </Field>
            <Field
                name='password'
            >
                {
                    (passwordProps) => (<Input {...passwordProps}
                                               type='password'
                                               label={'Password'}/>)
                }
            </Field>
                <button
                className={styles.submitButton}
                    type="submit"
                        disabled={isSubmitting}>
                    Login
                </button>
        </Form>
    )
};

export default withFormik({
    mapPropsToValues: () => ({
        email: '',
        password: '',
    }),
    handleSubmit: (values, formikBag) => {
        console.log(values);
        console.log(formikBag);
    },
    validationSchema: loginSchema,

})(SignInForm);