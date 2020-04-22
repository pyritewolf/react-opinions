import React from 'react';
import classNames from 'classnames';

import styles from './styles.module.scss';

const Card = ({children, hoverable}) => {
  return (
    <div className={classNames(styles.root, hoverable && styles.hoverable)}>
        {children}
    </div>
  );
};

export default Card;