import React from 'react';
import {Form, Field, withFormik} from 'formik';
import Input from '../Input';
import * as Yup from 'yup';
import styles from './SignInForm.module.scss'

const loginSchema = Yup.object().shape({
    email: Yup.string().email().required().label('Email'),
    password: Yup.string().min(8).required().label('Password'),
    confirmPassword: Yup.string().min(8).required(),
});


const CustomField = (fieldProps) => {
    const {placeholder} = fieldProps;

    return (
        <Field {...fieldProps} >
            {

                (fieldProps) => (<Input {...fieldProps}
                                        placeholder={placeholder}/>)
            }
        </Field>
    )
};


const SignInForm = (props) => {
    const {
        values,
        errors,
        touched,
        handleChange,
        isValid,
        handleBlur,
        validateOnBlur,
        handleSubmit,
        isSubmitting,
    } = props;

    return (
        <Form className={styles.formContainer}>
            <CustomField name='email' type='email' placeholder='Email'/>
            {/*<Field name="email"
                   type="text">
                {
                    (emailProps) => (<Input {...emailProps}
                                            placeholder={'Email'}

                    />)
                }
            </Field>*/}
            <CustomField name='password' type='password' placeholder='Password'/>
            {/*    <Field name='password'
                   type='password'
                   placeholder={'Password'}>
                {
                    (passwordProps) => (<Input {...passwordProps}

                    />)
                }
            </Field>*/}
            <CustomField name='confirmPassword' type='password' placeholder='Confirm Password'/>
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