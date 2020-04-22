import React, { useContext } from 'react';
import classNames from 'classnames';

import { store } from 'context';

import style from './styles.module.scss';


function Input({placeholder, type = 'text', value  = '', onChange, error}) {
  const {theme} = useContext(store);

  return (
    <div className={classNames(style.root, style[theme])}>
      <input className={classNames(style.input, error && style.invalid)} type={type} placeholder={placeholder} value={value} onChange={onChange} />
      <div className={style.error}>{error}</div>
    </div>
  );
}

export default Input;