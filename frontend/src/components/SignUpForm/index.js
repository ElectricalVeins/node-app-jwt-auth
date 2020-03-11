import React from 'react';
import {withFormik, Form, Field} from 'formik';
import Input from "../Input";
import * as Yup from 'yup';

const signUpSchema = Yup.object().shape({
        firstName: Yup.string().trim().min(4).max(255).required(),
        lastName: Yup.string().trim().min(4).max(255).required(),
        email: Yup.string().email().required(),
        password: Yup.string().min(8).required(),
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
        <Form>
            <Field
                name="email"
            >
                {
                    (props) => (<Input {...props}
                                       type="email"
                                       label={'Email'}/>)
                }
            </Field>
            <Field
                name="Password"
            >
                {
                    (props) => (<Input {...props}
                                       type="password"
                                       label={'Password'}/>)
                }
            </Field>
            <Field
                name="Confirm Password"
            >
                {
                    (props) => (<Input {...props}
                                       type="password"
                                       label={'Confirm Password'}/>)
                }
            </Field>
            <Field
                name='firstName'
            >
                {
                    (props) => (<Input {...props}
                                       type='text'
                                       label={'First Name'}/>)
                }
            </Field>
            <Field
                name='lastName'
            >
                {
                    (props) => (<Input {...props}
                                       type='text'
                                       label={'Last Name'}/>)
                }
            </Field>
            <div>
                <button type="submit"
                        disabled={isSubmitting}>
                    Submit
                </button>
            </div>
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