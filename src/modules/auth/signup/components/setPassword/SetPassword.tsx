/*** libraries ***/
import type { FC } from 'react';
import { useTranslation } from 'react-i18next';

/*** css ***/
import styles from './SetPassword.module.css';

/*** types ***/
import type { Props } from './SetPassword.type';

/*** components ***/
import { Input } from '@app/components';

const SetPassword: FC<Props> = () => {
  const { t } = useTranslation();
  return (
    <div className={styles.container}>
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
    </div>
  );
};

export default SetPassword;
