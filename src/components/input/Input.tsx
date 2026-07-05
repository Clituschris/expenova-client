import { useMemo, useState, type FC } from 'react';
import styles from './Input.module.css';
import type { Props } from '../input/Input.type';
import { Eye, EyeSlash, Mail, Phone, User } from '@app/icons';

const Input: FC<Props> = ({
  type,
  icon,
  placeholder,
  value,
  label,
  id,
  onChange
}) => {
  const [showPassword, setShowPasssword] = useState(false);

  const _icon = useMemo(() => {
    if (type === 'password' && showPassword) {
      return (
        <span
          className={styles.actionIcon}
          onClick={() => setShowPasssword(false)}
        >
          <Eye />
        </span>
      );
    } else if (type === 'password') {
      return (
        <span
          className={styles.actionIcon}
          onClick={() => setShowPasssword(true)}
        >
          <EyeSlash />
        </span>
      );
    } else if (type === 'email') {
      return <Mail />;
    } else if (icon === 'user') {
      return <User />;
    } else if (icon === 'phone') {
      return <Phone />;
    } else {
      return null;
    }
  }, [type, showPassword, icon]);

  return (
    <div className={styles.container}>
      {label ? (
        <label className={styles.label} htmlFor={id}>
          {label}
        </label>
      ) : null}
      <div className={styles.inputContainer}>
        <input
          type={showPassword ? 'text' : type}
          placeholder={placeholder}
          id={id}
          value={value}
          onChange={onChange}
          className={styles.input}
        />
        {_icon}
      </div>
    </div>
  );
};

export default Input;
