/*** libraries ***/
import { useTranslation } from 'react-i18next';

/*** css ***/
import styles from './SetPassword.module.css';

/*** components ***/
import { Input } from '@app/components';

const SetPassword = () => {
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
