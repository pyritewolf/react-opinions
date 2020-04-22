import React, { useContext } from 'react';
import classNames from 'classnames';

import { store } from 'context';

import styles from './styles.module.scss';

const Card = ({children, hoverable}) => {
  const {theme} = useContext(store);
  return (
    <div className={classNames(styles.root, hoverable && styles.hoverable, styles[theme])}>
        {children}
    </div>
  );
};

export default Card;