import React      from 'react';
import PropTypes  from 'prop-types';
import classNames from 'classnames';
import styles     from './Input.module.scss';

/*const ErrorMsg = ({ className, ...rest }) => {
  const classNameValue = classNames(styles.errorTip, className);
  return <div className={classNameValue} {...rest} />;
};
ErrorMsg.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};*/

const Input = ({ field, form, meta, ...props }) => {

  const inputClassName = classNames(styles.field, {
    [styles.fieldInvalid]: (meta.touched && meta.error),
    [styles.fieldValid]: (meta.touched && !meta.error),
  });

  return (
    <input className={inputClassName}
           {...field}
           {...props}/>
  );
};

Input.propTypes = {
  placeholder: PropTypes.string,
  className: PropTypes.string,
  invalidStyles: PropTypes.string,
  validStyles: PropTypes.string,
};

export default Input;