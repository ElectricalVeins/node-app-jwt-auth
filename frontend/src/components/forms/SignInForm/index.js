import React                             from 'react';
import { Field, Form, withFormik }       from 'formik';
import Input                             from '../Input';
import Label                             from '../Label';
import StyledErrorMessage                from '../StyledErrorMessage';
import { PASSWORD_REGEXP, PASSWORD_TIP } from '../../../constants';
import * as Yup                          from 'yup';
import styles                            from './SignInForm.module.scss';

const loginSchema = Yup.object().shape( {
	email: Yup.string()
						.email()
						.required()
						.label( 'Email' ),
	password: Yup.string()
							 .min( 8 )
							 .matches( PASSWORD_REGEXP,
								 PASSWORD_TIP )
							 .required()
							 .label( 'Password' ),
} );

export const CustomField = ( fieldProps ) => {
	const { placeholder, type,name } = fieldProps;
	console.log('CustomField',fieldProps)
	return (
		<Field {...fieldProps} >
			{
				( fieldProps ) => (
					<Label>
						<Input {...fieldProps} placeholder={placeholder} type={type}/>
						<StyledErrorMessage name={name} className={styles.errorTip}/>
					</Label>
				)
			}
		</Field>
	);
};

const SignInForm = ( props ) => {
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
			<CustomField name='email' type='email' value={values.email}
									 placeholder='Email address'/>
			<CustomField name='password' type='password' value={values.password}
									 placeholder='Password'/>
			<button
				className={styles.submitButton}
				type="submit"
				disabled={isSubmitting}>
				Login
			</button>
		</Form>
	);
};

export default withFormik( {
	mapPropsToValues: () => ( {
		email: '',
		password: '',
	} ),
	handleSubmit: ( values, formikBag ) => {
		console.log( values );
		console.log( formikBag );
	},
	validationSchema: loginSchema,
} )( SignInForm );