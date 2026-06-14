import { useState, type FC } from 'react';
import styles from './Input.module.css';
import type { Props } from '../input/Input.type';
import { Eye, EyeSlash, Mail, User } from '@app/icons';

const Input: FC<Props> = ({ type, icon, placeholder, value, onChange }) => {
  const [showPassword, setShowPasssword] = useState(false);

  const renderIcon = () => {
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
    } else {
      return null;
    }
  };
  return (
    <div className={styles.inputContainer}>
      <input
        type={showPassword ? 'text' : type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={styles.input}
      />
      {renderIcon()}
    </div>
  );
};

export default Input;
