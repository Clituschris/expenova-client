/*** libraries ***/
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

/*** css ***/
import styles from './Login.module.css';

/*** types ***/
import { Button, Input } from '@app/components';

const Login = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.container}>
      <Input
        placeholder="you@example.com"
        onChange={() => {}}
        label={t('auth.form.email')}
        id="email"
        type="email"
      />
      <Input
        placeholder="*************"
        onChange={() => {}}
        label={t('auth.form.password')}
        id="password"
        type="password"
      />
      <div className={styles.forgotPasswordContainer}>
        <Link to="/forgotpassword" className={styles.forgotPasswordLink}>
          {t('auth.form.forgotpassword')}
        </Link>
      </div>
      <div className={styles.button}>
        <Button text={t('auth.button.login')} onClick={() => {}} />
      </div>
      <div className={styles.createAccount}>
        {t('auth.form.signuplink.text')}
        <Link to="/signup" className={styles.signupLink}>
          {t('auth.form.signuplink.link')}
        </Link>
      </div>
    </div>
  );
};

export default Login;
