import React                                   from 'react';
import { Field, FieldArray, Form, withFormik } from 'formik';
import { LOGIN_SCHEMA }                        from '../../../constants';
import styles                      from './SignInForm.module.scss';
import CustomField                 from "../CustomField";

const formInputs = [
	{
		name: 'email',
		placeholder: 'Email address',
		type: 'email',
	}, {
		name: 'password',
		placeholder: 'Password',
		type: 'password',
	},
];

const SignInForm = ( props ) => {
	const {
		values,
		isSubmitting,
	} = props;

	return (
		<Form className={styles.formContainer}>

			<FieldArray name='SignInFormFields' render={arrayHelpers=>(
				formInputs.map(fieldValues=>(
					<CustomField key={fieldValues.name} {...fieldValues} />
				))
			)} />

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
	validationSchema: LOGIN_SCHEMA,
} )( SignInForm );

/*
<CustomField name='email' type='email' value={values.email} placeholder='Email address'/>
<CustomField name='password' type='password' value={values.password} placeholder='Password'/>
*/

