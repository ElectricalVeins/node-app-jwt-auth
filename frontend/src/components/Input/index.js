import React from 'react';
import classNames from 'classnames';
import styles from './Input.module.scss';

const Input = ({field, form, meta,...props}) => {
    console.log(props)

    const inputClassName = classNames(styles.field, {
        [styles.fieldInvalid]: (meta.touched && meta.error),
        [styles.fieldValid]: (meta.touched && !meta.error),
    });

    return (
        <label className={styles.container}>
            <input className={inputClassName}
                   {...field}
                   {...props}/>
            {meta.error && meta.touched && <div className={styles.errorTip}>{meta.error}</div>}
        </label>
    );
};

export default Input;