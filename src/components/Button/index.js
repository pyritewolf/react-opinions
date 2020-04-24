import React, {useContext} from 'react';
import classNames from 'classnames';

import { store } from 'context';

import style from './style.module.scss';


function Button({
  children, // actual button content
  disabled,
  onClick,
  type = 'button', // html button type
  appearance = "default", // default, block, outline
  size = "md", // md, sm
  color="primary", // secondary, grey
  icon = null, // a node for an icon
  hoverable // enable hoverable-hidden text
}) {
  const {theme} = useContext(store);
  return <button
    disabled={disabled}
    type={type}
    className={classNames(style.root, style[`appearance-${appearance}`], style[`size-${size}`], style[`color-${color}`], hoverable && icon && style.hoverable, style[theme])}
    onClick={onClick}>
      {icon && <span className={style.icon}>{icon}</span>}
      <span className={style.text}>
        {children}
      </span>
  </button>;
}

export default Button;