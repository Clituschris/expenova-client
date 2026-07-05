import type { FC } from 'react';
import type { Props } from './Button.type';
import styles from './Button.module.css';

const Button: FC<Props> = ({
  text,
  onClick,
  size = 'md',
  variant = 'primary'
}) => {
  return (
    <button
      className={`${styles.button} ${styles[size]} ${styles[variant]}`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
