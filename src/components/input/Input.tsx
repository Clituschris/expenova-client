import { useMemo, useRef, useState, type FC } from 'react';
import styles from './Input.module.css';
import type { Props } from '../input/Input.type';
import { Eye, EyeSlash, Mail, Phone, User } from '@app/icons';
import { cn } from '@app/utility/helpers';

const Input: FC<Props> = ({
  id,
  name,
  type,
  icon,
  placeholder,
  value,
  label,
  error,
  disabled = false,
  headerLink = null,
  onChange,
  onBlur
}) => {
  const inputRef = useRef<HTMLInputElement>(null);
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

  const scrollInputIntoView = () => {
    const el = inputRef.current;
    if (!el) return;

    if (window.visualViewport) {
      const vv = window.visualViewport;

      const onResize = () => {
        const rect = el.getBoundingClientRect();
        const overlap = rect.bottom - vv.height;

        if (overlap > 0) {
          window.scrollBy({ top: overlap + 16, behavior: 'smooth' });
        } else {
          el.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }

        vv.removeEventListener('resize', onResize);
      };

      vv.addEventListener('resize', onResize);

      // Fallback in case resize never fires (e.g. keyboard already open)
      setTimeout(() => {
        vv.removeEventListener('resize', onResize);
      }, 500);
    } else {
      setTimeout(() => {
        el.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }, 300);
    }
  };

  const handleFocus = () => {
    scrollInputIntoView();
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        {label ? (
          <label className={styles.label} htmlFor={id}>
            {label}
          </label>
        ) : null}
        {headerLink}
      </div>
      <div
        className={cn(styles.inputContainer, {
          [styles.errorBorder]: !!error,
          [styles.disabled]: disabled
        })}
      >
        <input
          ref={inputRef}
          id={id}
          name={name}
          type={showPassword ? 'text' : type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          onFocus={handleFocus}
          className={styles.input}
          disabled={disabled}
        />
        {_icon}
      </div>
      <div className={styles.error}>{error ?? ''}</div>
    </div>
  );
};

export default Input;
