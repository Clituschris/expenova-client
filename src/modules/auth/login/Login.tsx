import type { FC } from 'react';
import type { Props } from './Login.type';
import styles from './Login.module.css';

import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import i18n from '@app/i18n';

import { Logo, LoginIllustrator } from '@app/icons';
import { Input, Button } from '@app/components';

const Login: FC<Props> = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const goToSignup = () => {
    navigate('/signup');
  };

  const toggleLanguage = () => {
    const currentLang = i18n.language;
    const newLang = currentLang === 'en' ? 'ta' : 'en';
    i18n.changeLanguage(newLang);
  };

  return (
    <div className={styles.container}>
      <div className={styles.logoContainer}>
        <Logo size={3} />
      </div>
      <div className={styles.formContainer}>
        <div className={styles.illustratorContainer}>
          <LoginIllustrator />
        </div>
        <div className={styles.inputContainer}>
          <Input
            type="email"
            placeholder={t('auth.email')}
            onChange={() => {}}
          />
          <Input
            type="password"
            placeholder={t('auth.password')}
            onChange={() => {}}
          />
          <div className={styles.forgotPasswordContainer}>
            <div className={styles.forgotPasswordText}>
              {t('auth.forgotpassword')}
            </div>
          </div>
          <Button
            text={t('auth.signin')}
            onClick={() => {
              toggleLanguage();
            }}
          />
          <div className={styles.signupContainer}>
            <div>{t('auth.newuser')}</div>
            <div className={styles.signupLink} onClick={goToSignup}>
              {t('auth.createaccount')}
            </div>
          </div>
        </div>
        <div className={styles.illustratorContainer}>
          <LoginIllustrator invert />
        </div>
      </div>
    </div>
  );
};

export default Login;
