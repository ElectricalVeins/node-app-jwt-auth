import React                            from 'react';
import { withFormik, Form, FieldArray } from 'formik';
import styles                           from './SignUpForm.module.scss'
import CustomField                      from "../CustomField";
import { SIGN_UP_SCHEMA }               from '../../../constants';
import errorStyles                      from '../StyledErrorMessage/StyledErrorMessage.module.scss'
import inputStyles                      from '../Input/Input.module.scss'

const errorStyle = errorStyles.errorTip;

const inputStylesProp = {
	InputStyle: inputStyles.inputStyle,
	InputValidStyle: inputStyles.inputValidStyle,
	InputInvalidStyle: inputStyles.inputInvalidStyle
};

const initialValues = {
	firstName: '',
	lastName: '',
	email: '',
	password: '',
	confirmPassword: '',
};
const formInputs = [
	{
		name: 'firstName',
		placeholder: 'First Name',
		type: 'text',
	}, {
		name: 'lastName',
		placeholder: 'Last Name',
		type: 'text',
	}, {
		name: 'email',
		placeholder: 'Email address',
		type: 'email',
	}, {
		name: 'password',
		placeholder: 'Password',
		type: 'password',
	}, {
		name: 'confirmPassword',
		placeholder: 'Confirm password',
		type: 'password',
	}
];



const SignUpForm = ( props ) => {
	const {
		values,
		isSubmitting,
	} = props;

	return (
		<Form className={styles.formContainer}>

			<FieldArray name='SignUpFormFields' render={arrayHelpers => (
				formInputs.map( fieldValue => (
					<CustomField key={fieldValue.name}
											 errorStyle={errorStyles.errorTip}
											 InputStyles={inputStylesProp}
											 {...fieldValue} />
				) ) )}>


			</FieldArray>

			<button type="submit"
							className={styles.submitButton}
							disabled={isSubmitting}>
				Create account
			</button>
		</Form>
	);
};

export default withFormik( {
	mapPropsToValues: () => ( initialValues ),
	handleSubmit: ( values, formikBag ) => {
		console.log( values );
		console.log( formikBag );
	},
	validationSchema: SIGN_UP_SCHEMA,
} )( SignUpForm );


/*
			<CustomField name='firstName' type='text' placeholder='First Name'/>
			<CustomField name='lastName' type='text' placeholder='Last Name'/>
			<CustomField name='email' type='email' placeholder='Email'/>
			<CustomField name='password' type='password' placeholder='Password'/>
			<CustomField name='confirmPassword' type='password' placeholder='Confirm Password'/>
*/