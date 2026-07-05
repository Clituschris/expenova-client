/** library **/
import { useMemo, useState, type FC } from 'react';
import { t } from 'i18next';

/** css **/
import styles from './ForgotPassword.module.css';

/** types **/
import type { Props } from './ForgotPassword.type';

/** components **/
import { Button, Input } from '@app/components';

const ForgotPassword: FC<Props> = () => {
  const [isValid, setIsValid] = useState(false);

  const buttonText = useMemo(
    () => (isValid ? t('auth.button.resetpassword') : t('auth.button.next')),
    [isValid]
  );
  return (
    <div className={styles.container}>
      <Input
        placeholder="+91 1234512345"
        onChange={() => {}}
        label={t('auth.form.phone')}
        id="phone"
        type="number"
        icon="phone"
      />
      <Input
        placeholder="dd-mm-yyyy"
        onChange={() => {}}
        label={t('auth.form.dob')}
        id="dob"
        type="date"
      />
      {isValid ? (
        <>
          <div className={styles.splitter}></div>
          <Input
            placeholder="*************"
            onChange={() => {}}
            label={t('auth.form.password')}
            id="password"
            type="password"
          />
          <Input
            placeholder="*************"
            onChange={() => {}}
            label={t('auth.form.confirmpassword')}
            id="conformPassword"
            type="password"
          />
        </>
      ) : null}
      <div className={styles.button}>
        <Button
          text={buttonText}
          onClick={() => {
            setIsValid(true);
          }}
        />
      </div>
    </div>
  );
};

export default ForgotPassword;
