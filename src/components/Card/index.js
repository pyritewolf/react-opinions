import React, { useContext } from 'react';
import classNames from 'classnames';

import { store } from 'context';

import style from './style.module.scss';

const Card = ({children, hoverable, ...props}) => {
  const {theme} = useContext(store);
  return (
    <div {...props} className={classNames(style.root, hoverable && style.hoverable, style[theme])}>
        {children}
    </div>
  );
};

export default Card;