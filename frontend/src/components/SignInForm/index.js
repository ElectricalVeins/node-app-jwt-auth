import React from 'react';
import {Form, Field, withFormik} from 'formik';
import Input from '../Input';
import * as Yup from 'yup';
import styles from './SignInForm.module.scss'

const loginSchema = Yup.object().shape({
    email: Yup.string().email().required(),
    password: Yup.string().min(8).required()
});

const emailSchema=Yup.string().email().required();
const passwordSchema=Yup.string().min(8).required();



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

    const validateEmail = async (value) => {
        try {
            await emailSchema.validate(value);
        }
        catch (e) {
            return e.message
        }
    };

    const validatePass =async (value) =>{
        try {
            await passwordSchema.validate(value);
        }
        catch (e) {
            return e.message
        }

    }

    return (
        <Form className={styles.formContainer}>
            <Field name="email"
                   type="text"
                   value={values.email}
                   validate={validateEmail}>
                {
                    (emailProps) => (<Input {...emailProps}
                                            placeholder={'Email'}

                    />)
                }
            </Field>
            <Field name='password'
                   type='password'
                   value={values.password}
                   validate={validatePass}>
                {
                    (passwordProps) => (<Input {...passwordProps}
                                               placeholder={'Password'}
                    />)
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
   // validationSchema: loginSchema,

})(SignInForm);