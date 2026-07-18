import type { FC } from 'react';
import styles from './Button.module.css';
import type { Props } from './Button.type';
import { cn } from '@app/utility/helpers';

const Button: FC<Props> = ({
  text,
  onClick = () => {},
  type = 'button',
  size = 'md',
  variant = 'primary',
  outlined = false,
  loading = false,
  disabled = false
}) => {
  return (
    <button
      className={cn(styles.button, styles[size], styles[variant], {
        [styles.outlined]: outlined,
        [styles.filled]: !outlined,
        [styles.disabled]: disabled,
        [styles.loading]: loading
      })}
      type={type}
      onClick={onClick}
      disabled={disabled}
    >
      {text}
    </button>
  );
};

export default Button;
