import classNames from 'classnames';
import styles     from './Label.module.scss';
import PropTypes  from 'prop-types';
import React      from 'react';

 const Label = ({ className, ...rest }) => {
  const classNameValue = classNames(styles.container, className);
  return <label className={classNameValue} {...rest} />;
};
Label.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default Label;