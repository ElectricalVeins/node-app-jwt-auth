import PropTypes        from 'prop-types';
import { ErrorMessage } from 'formik';
import React            from 'react';

const StyledErrorMessage = ({ className, ...rest }) => {
  return (

    <ErrorMessage {...rest} >
      {
        msg => (<div className={className}>{msg}</div>)
      }
    </ErrorMessage>

  );
};

StyledErrorMessage.propTypes = {};

export default StyledErrorMessage;