import React from 'react';
import {Form, Field, withFormik} from 'formik';
import Input from '../Input';
import * as Yup from 'yup';
import styles from './SignInForm.module.scss'

const loginSchema = Yup.object().shape({
    email: Yup.string().email().matches().required(),
    password: Yup.string().min(8).required(),
    confirmPassword: Yup.string().min(8).required(),
});


const CustomField=(fieldProps)=>{
    return(
      <Field {...fieldProps} >
          {

              (props)=>(<Input {...props} />)
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
            <Field name="email"
                   type="text"
            >
                {
                    (emailProps) => (<Input {...emailProps}
                                            placeholder={'Email'}

                    />)
                }
            </Field>
            <Field name='password'
                   type='password'
            >
                {
                    (passwordProps) => (<Input {...passwordProps}
                                               placeholder={'Password'}
                    />)
                }
            </Field>
            <CustomField name='confirmPassword' type='password' placeholder='Confirm Password' />
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