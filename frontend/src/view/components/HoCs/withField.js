import React     from 'react';
import { Field } from 'formik';

const withField = (options) => (WrappedComponent) => {

  return (props) => {

    return (
      <Field {...options}>
        {
          fieldProps => <WrappedComponent  {...fieldProps} {...props} />
        }
      </Field>
    );
  };
};

export default withField;