import React     from 'react';
import { Field } from 'formik';

export default function withField (WrappedComponent) {
  return (props) => {
    return (
      <Field {...props} >
        {
          value => <WrappedComponent  {...value} />
        }
      </Field>
    );
  };
}
