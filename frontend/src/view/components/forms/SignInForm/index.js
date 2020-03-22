import React, { forwardRef }            from 'react';
import { FieldArray, Form, withFormik } from 'formik';
import { LOGIN_SCHEMA }                 from '../../../../constants';
import styles                           from './SignInForm.module.scss';
import CustomField                      from "../CustomField";
import errorStyles                      from "../StyledErrorMessage/StyledErrorMessage.module.scss";
import inputStyles                      from "../Input/Input.module.scss";
import { loginUser }                    from "../../../../api/auth";
import store                            from '../../../../redux/store'
import { ACTION_TYPES }                 from "../../../../redux/actions/actionTypes";
import { connect }                      from "react-redux";


const inputStylesProp = {
  inputStyle: inputStyles.inputStyle,
  inputValidStyle: inputStyles.inputValidStyle,
  inputInvalidStyle: inputStyles.inputInvalidStyle
};

const SignInForm = ( props ) => {
  const {
    values,
    isSubmitting,
  } = props;

  return (
    <Form className={styles.formContainer}>

      <CustomField name='email'
                   type='email'
                   errorStyle={errorStyles.errorTip}
                   inputStyles={inputStylesProp}
                   value={values.email}
                   placeholder='Email address'/>
      <CustomField name='password'
                   type='password'
                   errorStyle={errorStyles.errorTip}
                   inputStyles={inputStylesProp}
                   value={values.password}
                   placeholder='Password'/>

      <button
        onClick={props.submitForm}
        className={styles.submitButton}
        type="submit"
        disabled={isSubmitting}>
        Login
      </button>
    </Form>
  );
};

const mapDispatchToProps = ( dispatch ) => {
  return {
    handleSubmitClick: ( userData ) => dispatch( {
      type: ACTION_TYPES.LOGIN_USER_REQUEST,
      data: userData
    } )
  };
};

const mapStateToProps = ( state ) => {
  console.log( state.authStore )
  return state.authStore
};


const FormWithFormik = withFormik( {
  mapPropsToValues: () => ( {
    fields: [
      {
        name: 'email',
        placeholder: 'Email address',
        type: 'email',
      }, {
        name: 'password',
        placeholder: 'Password',
        type: 'password',
      },
    ],
    email: '',
    password: '',
  } ),
  handleSubmit: async ( values, { props, setSubmitting, ...rest } ) => {

    console.log( 'handle submit' );
    props.handleSubmitClick( {
      email: values.email,
      password: values.password
    } )
    /*или обернуть в connect и mapStateToProps & mapDispatchToProps*/


    /*
        formikBag.setSubmitting( true );
        try {
          const { email, password } = values;

          const { data: { user } } = await loginUser( {
            email,
            password
          } );

          formikBag.props.onSubmit( user );
        } catch ( e ) {
          alert( e.response.data );
        }*/
  },
  validationSchema: LOGIN_SCHEMA,
} )( SignInForm );

export default connect( mapStateToProps, mapDispatchToProps )( FormWithFormik )


/*
<CustomField name='email' type='email' value={values.email} placeholder='Email address'/>
<CustomField name='password' type='password' value={values.password} placeholder='Password'/>
*/
/*      <FieldArray name='fields'
                  render={arrayHelpers => (
                    values.fields.map( fieldValues => {
                      return (
                        <CustomField key={fieldValues.name}
                                     value={values[ fieldValues.name ]}
                                     errorStyle={errorStyles.errorTip}
                                     inputStyles={inputStylesProp}
                                     {...fieldValues} />
                      )
                    } )
                  )}/>*/
